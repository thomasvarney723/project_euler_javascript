/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

// This logic is correct but it's not efficient enough

function sumOfPrimeNumbersLessThan(number) {
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
}
