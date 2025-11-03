//#qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :


// 5. перебрати циклом while та вивести  числа тільки парні  значення
//РЕВЕРС

let massiveNumbers = [2,17,13,6,22,31,45,66,100,-18]
let x = 0;
x = massiveNumbers.length - 1;
while ( x>= 0){
    if (massiveNumbers[x] % 2 === 0) {console.log(massiveNumbers[x]);}x--;}
