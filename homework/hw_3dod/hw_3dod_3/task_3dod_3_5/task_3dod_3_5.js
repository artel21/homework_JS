//#qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :


// 5. перебрати циклом while та вивести  числа тільки парні  значення

let massiveNumbers = [2,17,13,6,22,31,45,66,100,-18]
let x = 0;
while (x <= massiveNumbers.length){
    if (massiveNumbers[x] % 2 === 0){console.log(massiveNumbers[x]);}
    x++;}
