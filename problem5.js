/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

(function smallestNumberDivisibleByNumbersOneThrough(numb) {
    currentNumb = numb;
    currentDivisor = numb - 1;
    while(currentDivisor > 1) {
        if(currentNumb % currentDivisor !== 0) {
            currentNumb += numb;
            currentDivisor = numb - 1;
        } else {
            currentDivisor--;
        }
    }
    return currentNumb;
})(20);

// Answer: 232792560
