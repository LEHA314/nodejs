
/*process.stdin.resume();
process.stdin.setEncoding('utf8');

let result = [];

setTimeout(()=>{
    process.stdin.emit('end');
}, 5000);

process.stdin.end();

process.stdin.on('data', chunk=>{
    console.log('chunk', chunk);
    result.push(chunk);
});

process.stdin.on('end', ()=>{
    console.log(result.join(''));
    console.log('-------END--------');
});*/

for(let i = 100; i> 0; i -= 1) {
    process.stdout.write(`${i} \n`);
}

//process.stdout.emit('end');