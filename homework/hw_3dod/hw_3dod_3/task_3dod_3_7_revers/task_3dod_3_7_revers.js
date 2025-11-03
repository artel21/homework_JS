//#qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :

// // 7. замінити кожне число, кратне 3, на слово “okten”//REVERS


let numberArray = [2,17,13,6,22,31,45,66,100,-18]
let myWord = 'okten';
let myResult = numberArray.map(number => {
    if (number % 3 === 0 ) {
        return myWord;
    }
    else {return number;}
});
let reversedArray = myResult.reverse();
console.log(reversedArray);
