//#qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :

// 6. перебрати циклом for та вивести  числа тільки парні  значення//REVERS


let randomNumbers = [2,17,13,6,22,31,45,66,100,-18]
for (let y = randomNumbers.length-1; y>=0; y--){
    if (randomNumbers[y] % 2 === 0)
    {console.log(randomNumbers[y])}
}