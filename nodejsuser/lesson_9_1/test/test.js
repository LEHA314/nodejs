const factorial = require('../app');
const assert = require('chai').assert;

describe('Test site for factorial function', () => {

    describe('Positive flow tests for factorial', () => {
        it('Given positive numver 5, expected return result 120', () => {
            //Arrange 
            const input = 5;
            //Act
            const result = factorial(input);
            //Assert
            assert.equal(120, result);
        });

        it('Given numver 0, expexted result 1', () => {
            const input = 0;
            const result = factorial(input);
            assert.equal(1, result);
        });

         it('Given numver 1, expexted result 1', () => {
            const input = 1;
            const result = factorial(input);
            assert.equal(1, result);
        });
    });


    describe('Negative flow factorial results', () => {
         it('Given negative number -1, expexted result Error', () => {
            const input = -1;
            assert.throws(() =>{ factorial(input)}, 
            Error,
            'Incorect input number range')
        });

         it('Given float number 1.3, expexted result Error', () => {
            const input = 1.3;
            assert.throws(() =>{ factorial(input)}, 
            Error,
            'Incorect input number type')
        });

        it('Given string, expexted result Incorect type Error', () => {
            const input = 'srt';
            assert.throws(() =>{ factorial(input)}, 
            Error,
            'Incorect input type')
        });
    });
});