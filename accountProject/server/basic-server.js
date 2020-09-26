const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    if (req.url === '/post') {
      req.on('data', (data) => {
        data = JSON.parse(data);
        balance += data.money;
        data['balance'] = balance;
        res.writeHead(200, {
          'content-type': 'text/html',
        })
        res.end(data);
      })
    } else {
      res.writeHead(200, {
        'content-type': 'text/html',
      })
      res.end('hello world!');
    }
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, defaultCorsHeader);
    res.end();
  } else if (req.method === 'GET') {
    res.writeHead(200, defaultCorsHeader);
    res.end('2000');
  }
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};