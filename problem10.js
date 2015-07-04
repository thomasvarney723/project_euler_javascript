/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

(function sumOfPrimeNumbersLessThan(number) {
    var sum = 2;
    for(var i = 3; i < number; i += 2)    
        if(isPrime(i))
            sum += i;
    return sum;
}

function isPrime(number) {
    if(number >= 2) {
        for(var i = 3; i < number/2.7; i += 2)
            if(number % i === 0)
                return false;
    } else 
        return false;
    return true;
})(2000000);

// Answer: 142913828922

/*
This solution took over a minute to finish running on my chromebook with Node.js
Maybe in the future I'll try Sieve of Eratosthenes
*/
