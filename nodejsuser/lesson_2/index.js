const server = require('http').createServer();

server.on('request', (req, res)=> {
    console.log('Hello Node 1');
    res.writeHead(200, {'Content-type': 'text/plain'});
    setTimeout(()=>{
        res.end('Hello end');
    });

});

server.on('request', (req, res)=> {
    console.log('Hello Node 222');
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello end 2');
    server.emit('close');
});

server.on('close', ()=> {
    console.log('Server goodbye');
});

server.on('start', ()=> {
    console.log('Server started');
});

server.listen(3000, 'localhost', ()=>{
    console.log('Server listen on port ' + 3000);
});

