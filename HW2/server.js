const http = require('http');

const server = http.createServer( (req, res) => {
  if(req.method === 'GET' && req.url === '/user'){
    res.write('User info');
    res.end();

    return;
  }
  if(req.url === '/user/:id'){
    res.write('Hey User');
    res.end();
  }
  req.pipe(res);
});

server.listen(3000, 'localhost', () => {
  console.log('Listen server on port 3000');
});