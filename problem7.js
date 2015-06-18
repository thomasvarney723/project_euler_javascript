/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

(function getPrimeNumber(numb) {
    var countOfPrimes = [2];
    var candidate = 3;
    var divisor = Math.floor(candidate / 2);
    while(countOfPrimes.length < numb) {
        if(divisor > 1 && candidate % divisor !== 0) {
            divisor--;
        } else if(divisor === 1){
            countOfPrimes.push(candidate);
            candidate = candidate + 2;
            divisor = Math.floor(candidate / 2);
        } else {
            candidate = candidate + 2;
            divisor = Math.floor(candidate / 2)
        }
    } 
    return countOfPrimes[countOfPrimes.length - 1];
})(10001);

/*
Variable Table:

candi   divsor  countofPrimes
3       1       2
5       2       2, 3
5       1       2, 3
7       3       2, 3, 5
7       2       2, 3, 5
7       1       2, 3, 5, 7
9       4       2, 3, 5, 7
9       3       2, 3, 5, 7
11      5       2, 3, 5, 7
11      4       2, 3, 5, 7
11      3       2, 3, 5, 7
11      2       2, 3, 5, 7
11      1       2, 3, 5, 7, 11
*/

// Answer: 104743
