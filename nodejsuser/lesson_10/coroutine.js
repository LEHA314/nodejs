const coroutine = function(generator){
    const it = generator();
    return function(){
        return it.next.apply(it, arguments);
    }
}

const getData = function(d, ms) {
    setTimeout(()=>{
        run(d)
    }, ms);
}

const run = coroutine(function * (){
    let x = 1 + (yield getData(10, 1000));
    let y = 1 + (yield getData(30, 2000));
    let answer = (yield getData(
        'Meaning of life: ' + (x + y)
    ));
    
    console.log(answer);
});

run();