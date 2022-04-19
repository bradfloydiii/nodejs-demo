const http = require('http');

const port = process.env.PORT || 5000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello World test');
});

server.listen(port, hostname, () => {
  console.log(`server ready on http://${hostname}:${port}/`);
});
