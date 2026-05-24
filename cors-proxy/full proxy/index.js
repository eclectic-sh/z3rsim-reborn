const express = require('express');
const rateLimit = require('express-rate-limit');
const https = require('https');
const http = require('http');

const app = express();
const PORT = 3003; // Cloudflare will talk to this port

// Only allow our specific frontend origins
const ALLOWED_ORIGINS = [
  'https://derpaholicrex.github.io',          // GitHub Pages (production)
  'http://localhost:8000',                    // Local dev (python http.server)
  'http://localhost:4200',                    // Angular dev (ng serve)
  'http://127.0.0.1:8000',
  'http://127.0.0.1:4200'
];

// The ONLY destination we'll proxy to
const ALLOWED_TARGET_HOST = 'alttpr.com';

// Parse JSON bodies with size limit (50KB - alttpr API responses are small)
app.use(express.json({ limit: '50kb' }));

// ---- Security Headers ----
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  // Manual CORS check
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
  } else if (origin) {
    // Reject disallowed origins - don't set CORS headers so browser blocks it
    console.warn('Blocked CORS request from origin:', origin);
  }

  next();
});

// Handle preflight
app.options('*', (req, res) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
    res.status(204).end();
  } else {
    res.status(403).json({ error: 'Origin not allowed' });
  }
});

// ---- Rate Limiting ----
const dailyLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 250,
  message: { error: 'Rate limit exceeded. Maximum 250 requests per day.' },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Cloudflare provides the real visitor IP in CF-Connecting-IP
    return req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.ip;
  }
});

const burstLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { error: 'Too many requests. Please wait before trying again.' },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.ip;
  }
});

// Apply rate limiters to the proxy endpoint
app.use('/api/randomizer', dailyLimiter, burstLimiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'z3r-cors-proxy', timestamp: new Date().toISOString() });
});

// ---- Proxy Endpoint ----
app.post('/api/randomizer', (req, res) => {
  try {
    const origin = req.headers.origin;
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
      return res.status(403).json({ error: 'Access denied. Origin not allowed.' });
    }

    const targetUrl = `https://${ALLOWED_TARGET_HOST}/api/randomizer`;
    console.log('Proxying POST to:', targetUrl, 'from origin:', origin);

    const body = JSON.stringify(req.body);

    if (body.length > 50000) {
      return res.status(413).json({ error: 'Request body too large.' });
    }

    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
      return res.status(400).json({ error: 'Invalid request body. Expected an object.' });
    }

    const parsedUrl = new URL(targetUrl);
    const options = {
      hostname: parsedUrl.hostname,
      port: 443,
      path: parsedUrl.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        'User-Agent': 'z3r-cors-proxy/1.0',
        'Accept': 'application/json'
      },
      timeout: 30000
    };

    const proxyReq = https.request(options, (proxyRes) => {
      let data = '';
      proxyRes.on('data', (chunk) => {
        data += chunk;
        if (data.length > 500000) {
          proxyRes.destroy();
          return res.status(502).json({ error: 'Upstream response too large.' });
        }
      });

      proxyRes.on('end', () => {
        try {
          JSON.parse(data);
        } catch (e) {
          console.error('Invalid JSON from upstream:', data.substring(0, 200));
          return res.status(502).json({ error: 'Invalid response from upstream server.' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(proxyRes.statusCode).send(data);
      });
    });

    proxyReq.on('error', (err) => {
      console.error('Upstream request failed:', err.message);
      res.status(502).json({ error: 'Failed to reach alttpr.com: ' + err.message });
    });

    proxyReq.on('timeout', () => {
      proxyReq.destroy();
      res.status(504).json({ error: 'Upstream request timed out.' });
    });

    proxyReq.write(body);
    proxyReq.end();
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Internal proxy error.' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found. Only POST /api/randomizer is available.' });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Z3R CORS Proxy running on port ${PORT} (Locked to localhost for Cloudflare Tunnel)`);
  console.log(`Allowed origins: ${ALLOWED_ORIGINS.join(', ')}`);
  console.log(`Target host: ${ALLOWED_TARGET_HOST}`);
});