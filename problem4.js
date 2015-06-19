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

function isPalendrome(a) {
    if(a.split().join() === reverse(a).join("")) {
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
