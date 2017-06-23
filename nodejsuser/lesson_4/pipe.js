const fs = require('fs');
const zlib = require('zlib');

const readableStream = fs.createReadStream('file.txt');
let duplex = zlib.createGzip();
let writable = fs.createWriteStream('file.txt.gz');

readableStream.pipe(duplex).pipe(writable);

/*const file = fs.readFile('file.txt', (err, data) => {
    console.log(data.toString('utf8'));
});*/