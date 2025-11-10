//#pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

const arrayMinValue =  (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(arrayMinValue([12,65,7,8,-19]))