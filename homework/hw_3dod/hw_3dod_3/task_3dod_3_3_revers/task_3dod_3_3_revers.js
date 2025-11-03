//
// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом //РЕВЕРС

let massiveNumbers = [2,17,13,6,22,31,45,66,100,-18]
let x = massiveNumbers.length - 1;
while (x >= 1) {let number = massiveNumbers[x]; console.log(number); x-=2}