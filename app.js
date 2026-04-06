const http = require('http');

const PORT = process.env.PORT || 3010;

const server = http.createServer((req, res) => {
  // Basic routing
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Gateways Node server');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on port ${PORT}`);
});
