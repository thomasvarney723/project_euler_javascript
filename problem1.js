/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function sumOfMultiples() {
    var counter = 0;
    var sumofMults = 0;
    while(counter < 1000) {
        if(counter % 5 === 0 || counter % 3 === 0) {
            sumofMults = sumofMults + counter;
        }
        counter++;
    }
    return sumofMults;
}

// Answer: 233168
