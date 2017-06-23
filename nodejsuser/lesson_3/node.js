const EventEmitter = require('events').EventEmitter;

class MyOwnEventEmitter extends EventEmitter {
    constructor(name){
        super();
        this.name = name;
    }
}

const myEmmiter = new MyOwnEventEmitter('Nick Event');

myEmmiter.addListener('restart', (err, msg)=>{
    console.log(myEmmiter.name);
    console.log(`${err} - ${msg}`);
})

myEmmiter.emit('restart', 'Unexpected error', 'Server war restarted');
