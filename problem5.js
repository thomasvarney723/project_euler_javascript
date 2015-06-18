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

/*
numb    divisor
6       5
12      5
18      5
24      5
30      5
30      4
36      5
42      5
48      5
54      5
60      5
60      4
60      3
60      2
60      1
return numb

*/
