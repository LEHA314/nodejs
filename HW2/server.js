const http = require('http');

let server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.writeHead(200, { 'Content-Type': 'text/plain' });
  	res.end('ok');
});

server.on('request', (req, res) => {
	if(req.path == '/') {
		res.write('Hello');
		res.end();
	}
});

server.listen(3000, 'localhost', () => {
	console.log('Server listen port 3000');
})