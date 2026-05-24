addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  // Proxy the request to the real alttpr.com API
  const targetUrl = 'https://alttpr.com' + url.pathname + url.search

  const modifiedRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow'
  })

  // Ensure we only proxy to the randomizer API
  if (!targetUrl.startsWith('https://alttpr.com/api/randomizer')) {
    return new Response('Invalid request. Only /api/randomizer is allowed.', { status: 403 })
  }

  const response = await fetch(modifiedRequest)
  const newResponse = new Response(response.body, response)

  newResponse.headers.set('Access-Control-Allow-Origin', '*')
  newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  newResponse.headers.set('Access-Control-Allow-Headers', '*')

  return newResponse
}