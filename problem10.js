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


// basically copy-pasted from my prime-numbers repo on Dec 27 2017
// approx 2000x faster than original

function eratosthenes(n) {
    var intArr = Array(n);  // array of 'undefined's of length n

    intArr[0] = intArr[1] = false;  // 0 and 1 are not primes

    var current = 2;
    while(current < Math.sqrt(n)) {
	for(var i = current * current; i < n; i += current)
	    intArr[i] = false;  // eliminate multiples of current
	current++;
	while(intArr[current] === false)  // get the next prime
	    current++;
    }

    var primes = [2];  // collect the primes
    for(var j = 3; j < intArr.length; j += 2) {
	if(intArr[j] === undefined)
	    primes.push(j);
    }

    return primes.reduce((a, b) => a + b);
}
