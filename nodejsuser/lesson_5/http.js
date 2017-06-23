const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.method === 'GET' && req.url === '/nick') {
        res.write('Nick info');
        res.end();
    }
     if(req.url === '/nick') {
        res.write('Nick');
        res.end();
    }
    req.pipe(res);
});

server.listen(3000, 'localhost', ()=>{
    console.log('Server listen on port ' + 3000);
});

/*const srv = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('okay');
});

srv.on('upgrade', (req, scoket, head)=>{
    socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
    'Upgrade: WebSocket\t\n'+
    'Connection: Upgrade\r\n' +
    '\r\n');
    socket.pipe(socket); //echo back
})

srv.listen(3000, 'localhost', ()=>{
    const option = {
        post: 3000,
        hostname: 'localhost',

    }
})*/