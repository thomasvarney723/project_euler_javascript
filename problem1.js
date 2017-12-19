/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

(function sumOfMultiplesOfThreeOrFiveLessThan(numb) {
    var counter = 0;
    var sumofMults = 0;
    while(counter < numb) {
        if(counter % 5 === 0 || counter % 3 === 0) {
            sumofMults = sumofMults + counter;
        }
        counter++;
    }
    return sumofMults;
})(1000);

// Answer: 233168

// original (above) on Jun 17 2015
// re-write (below) on Dec 18 2017
// essentially the same imperative code
// the functional version turned out to be fast too

function answer() {
    var current = 0;
    var accumulator = 0;
    while (current < 1000) {
	if (current % 3 === 0 || current % 5 === 0)
	    accumulator += current;
	current++;
    }
    return accumulator;
}

function answer2() {
    return [...Array(1000).keys()]  // in lieu of a range fn
        .filter(x => x % 3 === 0 || x % 5 === 0)
        .reduce((a, b) => a + b, 0);
}
