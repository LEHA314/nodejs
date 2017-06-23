const gen = function * () {
    let x = (yield);
    while(x !== 'stop') {
        console.log(x);  
        x = (yield);
    }

    return;
};

const it = gen();
it.next();
it.next('Hello');
it.next('world');
it.next('How');
it.next('Are');
it.next('You');
it.next('stop');
it.next('i\'m');
it.next('Fine');
it.next('Thank');
it.next('You');
it.next('stop');