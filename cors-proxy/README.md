# CORS Proxy for Z3R Simulator

Two options for proxying requests to `alttpr.com/api/randomizer` so the Z3R Simulator can generate seeds from any domain:

## 1️⃣ Cloudflare Worker (Recommended — `worker.js`)

A lightweight, serverless script that runs on Cloudflare's edge network. Free tier covers 100k requests/day.

### Deployment

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Create Worker**
2. Name it (e.g., `z3r-cors-proxy`) and paste the contents of [`worker.js`](./worker.js)
3. Click **Deploy**
4. Your worker URL will be something like `https://z3r-cors-proxy.your-subdomain.workers.dev`

### How it works

- Forwards POST requests to `https://alttpr.com/api/randomizer`
- Adds `Access-Control-Allow-Origin: *` so the browser accepts the response
- Rejects any request path other than `/api/randomizer`
- Zero maintenance, globally distributed, always HTTPS

## 2️⃣ Full Node.js Proxy (`full proxy/` folder)

A self-hosted Node.js/Express server with rate limiting, CORS origin whitelisting, and a systemd service file.

### Files

| File | Purpose |
|---|---|
| [`full proxy/index.js`](./full%20proxy/index.js) | Express server — proxies to alttpr.com with rate limiting |
| [`full proxy/package.json`](./full%20proxy/package.json) | Node dependencies |
| [`full proxy/z3r-cors-proxy.service`](./full%20proxy/z3r-cors-proxy.service) | systemd unit for auto-start on boot |

### Setup

```bash
cd "cors-proxy/full proxy"
npm install
node index.js
```

The server listens on port `3003` (locked to localhost). It's designed to sit behind a Cloudflare Tunnel or reverse proxy for public access.

### ⚠️ Challenges with this approach

- **Self-signed certificates**: If you host this without a proper reverse proxy, browsers will reject self-signed TLS certs, and CORS will fail. You **must** terminate TLS with a valid certificate (Let's Encrypt, Cloudflare Tunnel, or a reverse proxy like nginx/Caddy).
- **Ongoing maintenance**: Requires a VPS, OS updates, Node.js updates, and monitoring.
- **Systemd service**: The included `.service` file is configured for an Ubuntu user named `ubuntu` — paths and user will need to be adjusted for your server.
- **Cloudflare Tunnel**: Even with a VPS, you'll likely want Cloudflare Tunnel (or similar) to get a public HTTPS endpoint, which adds extra complexity.

### When to use the full proxy

- You need strict origin-based CORS control (the Worker uses a wildcard)
- You want deeper request validation or custom middleware
- You've already got a VPS running and want to colocate the proxy with other services

## Switching Between Options

In [`src/services/seed.service.ts`](../src/services/seed.service.ts), the app constructs the proxy URL. Replace it with your deployed endpoint:

```typescript
// Cloudflare Worker:
const proxyUrl = 'https://z3r-cors-proxy.your-subdomain.workers.dev/';

// Full proxy behind Cloudflare Tunnel:
const proxyUrl = 'https://proxy.your-domain.com/';
```

## Comparison

| Feature | Cloudflare Worker | Full Node.js Proxy |
|---|---|---|
| **Cost** | Free (100k req/day) | VPS cost |
| **Maintenance** | None | OS + Node + security updates |
| **TLS** | Automatic | Requires manual setup |
| **Rate limiting** | Built-in Workers platform | express-rate-limit middleware |
| **CORS control** | Wildcard (`*`) | Per-origin whitelist |
| **Deploy time** | 2 minutes | 30+ minutes |
| **Global edge** | Yes | Single region |