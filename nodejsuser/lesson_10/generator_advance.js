const main = function * () {
    let x = (yield 1);
    console.log(x);
    x = (yield 'How are you');
    console.log(x);
    x = (yield 'Nice to hear that');
    console.log(x);
}

const it = main();
console.log(it.next().value);
console.log(it.next('Hi').value);
console.log(it.next('I\'m dead').value);
console.log(it.next('F*** you!').value);