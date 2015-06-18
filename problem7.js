/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function getPrimeNumber(numb) {
    while(numb < 10001) {
        
    }
}

function isPrime(numb) {
    var currentDivisor = Math.floor(numb / 2);
    while(currentDivisor > 1) {
        
        if(numb % currentDivisor === 0) {
            currentDivisor--;
        } else {
            return false;
        }
    }
    return true;
}

function roundDown(numb) {
    return Math.floor(numb / 2);
}

/*
Variable Table:

number  divsor  countofPrimes
3       1       2
5       2       2
5       1       3
7       3       3
7       2       3
7       1       4
9       4       4
9       3       4
11      5       4
11      4       4
11      3       4
11      2       4
11      1       5
