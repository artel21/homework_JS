//#gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter


//=======================================Робимо прототип customForEach=============================================//

Array.prototype.customForEach = function(callback, thisArg) {
    const array = this;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (i in array) {
            callback.call(thisArg, array[i], i, array);
        }
    }
};

//============================================застосовуємо========================================================//

const arrayOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    console.log(`масив, до якого буду застосовувти свої прототипи`,arrayOptions)

console.log(' ')
console.log(`застосовуємо customForEach (аналог forEach)`)

arrayOptions.customForEach(function(number, index, arr) {
    console.log(`id ${index} | значення: ${number}`);
});

//=======================================Робимо прототип myCustomFilter==========================================//

Array.prototype.myCustomFilter = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

//===============================================застосовуємо=================================================//

console.log(' ')
console.log(`застосовуємо myCustomFilter (аналог filter)`)

const even = arrayOptions.myCustomFilter(function(num) {
    return num % 2 === 0;
});
console.log('тільки парні значення',even);