/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 â 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
(function diffSquaresSum(amount) {
    function sumOfSquares(amount) {
        var counter = 0;
        var sum = 0;
        while(counter < (amount + 1)) {
            var squared = Math.pow(counter, 2);
            sum = sum + squared;
            counter++;
        }
        return sum;
    }
    
    function squareOfSum(amount) {
        var counter = 0;
        var sum = 0;
        while(counter < (amount + 1)) {
            sum = sum + counter;
            counter++;
        }
        return Math.pow(sum, 2);
    }

    return squareOfSum(amount) - sumOfSquares(amount);
})(100);

// Answer: 25164150


// original above written on Jun 17 2015
// re-write below written on Dec 27 2015
// same speed as original

function answer(nat) {
    const sum    = arr => arr.reduce((x, y) => x + y, 0);
    const square = num => num * num;
    const nats   = [...Array(nat + 1).keys()];  // zero won't affect the result
    return square(sum(nats)) - sum(nats.map(square));
}
