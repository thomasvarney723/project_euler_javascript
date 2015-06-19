/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 Ã 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

(function biggestPalendromeOfProductsUnder(numb){
    var palArray = [];
    for(var i = numb; i > (numb / 2); i--) {
        for(var j = numb; j > 0; j--) {
            if(isPalendrome(j * i)) {
            palArray.push(j * i);
            }
        }
    }
    return Math.max.apply(Math, palArray);
})(1000);

function isPalendrome(a) {
    var x = String(a);
    if(x.split().join() === reverse(x).join("")) {
        return true;
    } else {
        return false;
    }
}

function reverse(a) {
    var stringed = String(a);
    var arrayed = stringed.split("");
    var arrayedLength = arrayed.length;
    var reversed = [];
    for(var i = 0; i < arrayedLength; i++) {
        reversed.push(arrayed.pop());
    }
    return reversed;
}

/* Limiting i and j within the for loop to half of numb and zero respectively, 
   shortens evaluation time a bit while still working for numb = 10 and numb = 1
   The closer to the value of numb i and j are, the faster the evaluation time.*/

// Answer: 906609
