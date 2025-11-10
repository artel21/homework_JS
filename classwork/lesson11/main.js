let arr = [
    [11, 22, 33],//0 index
    [44],// index 1
    [856, 789]//index 2
];

console.log(arr);

//звертаємось до ячейки х індексом 0 до 2-го елемента
let innerArray = arr[0];
console.log(innerArray[1]);//1 варіант

console.log(arr[0][1]);//2 варіант професійніший