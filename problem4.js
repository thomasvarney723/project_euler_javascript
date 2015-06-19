/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 Ã 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

(function biggestPalendromeOfProductsUnder(numb){
    var palArray = [];
    for(var i = numb; i > (numb / 9); i--) {
        for(var j = numb; j > (numb / 9); j--) {
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

// Answer: 906609
