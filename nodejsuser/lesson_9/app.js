const factorial = n => {
    if(typeof(n) !== 'number') {
        throw new Error('Incorect input type');
    }

    if(!Number.isInteger(n)) {
        throw new Error('Incorect input number type');
    }

    if( n < 0 ) {
        throw new Error('Incorect input number range');
    }

    if( n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}