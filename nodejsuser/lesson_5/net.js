const net = require('net');
const port = 8124;
let result = '';

const server = net.createServer(res=>{
    console.log('Connecting...');
    res.write('hello\r\n');

    res.on('data', (chunk)=> {
        result += chunk;
        res.write('-----------'+ chunk);
    });

    setTimeout(()=>{
        server.emit('close')
    }, 5000);
});

server.on('close', ()=>{
    console.log(result);
    console.log('CLose...');
});

server.listen(port, 'localhost', ()=>{
    console.log('Server listen on port '+ port);
});