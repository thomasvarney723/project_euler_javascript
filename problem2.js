/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 
*/

(function sumOfEvenFibonacciNumbersLessThan(numb) {
    var firstSlot = 1;
    var secondSlot = 2;
    var evenSum = 2;
    while(secondSlot < numb) {
        var nextFib = firstSlot + secondSlot;
        firstSlot = secondSlot;
        secondSlot = nextFib;
        if(nextFib % 2 === 0) {
            evenSum = evenSum + nextFib;
        }
    }
    return evenSum;
})(4000000);

// Answer: 4613732


// original on Jun 17 2015
// re-write on Dec 24 2017:
// same speed as original

function answer(n) {
    return (function recur(fibs) {
        const [f1, f2] = fibs.slice(-2);
	if (f1 + f2 < n)
	    return recur( fibs.concat([f1 + f2]) );
            else return fibs;
    })([1, 2])
	.reduce((a, b) => b % 2 === 0 ? a + b : a, 0);
}
