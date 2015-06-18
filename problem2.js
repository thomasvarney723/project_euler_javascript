/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 
*/

function getFibs() {
    var firstSlot = 1;
    var secondSlot = 2;
    var evenSum = 2;
    while(secondSlot < 4000000) {
        var nextFib = firstSlot + secondSlot;
        firstSlot = secondSlot;
        secondSlot = nextFib;
        if(nextFib % 2 === 0) {
            evenSum = evenSum + nextFib;
        }
    }
    return evenSum;
}

// Answer: 4613732
