const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    const requet = fs.writeFile('request.txt');
    let body = '';
    req.setEncoding('utf8');
    req.on('data', (chunk)=> {
        body += chunk;
    });

    req.on('end', ()=> {
        const data = JSON.parse(body);
        res.write(typeof body);
        res.end();
    })
}).listen(3000);