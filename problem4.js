function palendrome(){
    var palArray = [];
    var current = 999;
    function down(numb){    
        for(var i = current; i > 0; i--) {
            arth = current * i;
            if(isPalendrome(arth))
                palArray.push(arth);
        }
    }
    for(var i = 999; i > 990; i--) {
      down(i);
    }
    return palArray.filter(isPalendrome).sort();
}

function isPalendrome(str) {
    var stringy = String(str);
    var firstLetterCounter = 0;
    var secondLetterCounter = 1;
    var firstLetter = stringy.charAt(firstLetterCounter);
    var secondLetter = stringy.charAt(stringy.length - secondLetterCounter);
    while(firstLetterCounter < (stringy.length / 2)) {
        if(firstLetter !== secondLetter) {
            return false;
        } else {
            firstLetterCounter++;
            secondLetterCounter++;
        }
    }
    return true;
}

palendrome();
