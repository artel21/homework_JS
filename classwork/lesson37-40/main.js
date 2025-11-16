//------------------------------Функції STRING-----------------------------------------//

//метод concat

let str = 'hello okten';
// //console.log(str.concat('!!!'));

//метод toUpperCase
console.log(str.toUpperCase());

//метод toLowerCase
console.log(str.toLowerCase());

//метод startsWith
console.log(str.startsWith('he'));

//метод endsWith
console.log(str.endsWith('en'));

//метод SUBSTRING (обрізка)
console.log(str.substring(0, 2)); //2 аргумента, з якого індекса по який

//метод indexOF //показує під яким індексом знаходиться літера(символ) шукає ЗЛІВА НАПРАВО
console.log(str.indexOf('h'));

//метод lastIndexOf // те саме, тільки шукає ЗПРАВА НАЛІВО
console.log(str.lastIndexOf('o'));

//для методу indexOf існує аргумент position
console.log(str.indexOf('o',5)); // індекс літери 'o', починаючи з 5-го індекса

//метод ChartAT - повертає літеру за індексом
console.log(str.charAt(0));

//метод replace -  дозволяє замінити літери/ тільки перше введення
console.log(str.replace('o','!'));

//метод replaceAll - дозволяє замінити всі літери i
console.log(str.replaceAll('o','!'));

//метод SPLIT- розподіляє нашу стрінгу на частини (створює масив з окремими об'єктами)
let string = 'hello october';
let split = string.split(' '); // d даному випадку вказав розділювач 'пробіл'
console.log(split);

//приклад по спліту

let users = 'ert : 12588'

let p = users.split(':');
console.log(p);



///----------------------------------Базові функції масивів-------------------------------------///

// Щоб перевірити чи масив є масивом застосовується функція array.IsArray(arr)

let arr = []
console.log(Array.isArray(arr));


//PUSH - додає елемент в кінець масиву

//POP - видаляє елемент з кінця масиву

//UNSHIFT - додає елемент в початок масиву

//SHIFT - видаляє елемент з початку масиву

//JOIN - з'єднує елементи масиву (наприклад розділовими знаками)

//CONCAT - З'єднує масиви між собою
let array = ['element1', 'element2', 'element3'];
let nums = [1,2,3,6,5,4,7,8,9,6,5,4,1,2,3]
let concat = array.concat(nums);

console.log(concat);
console.log(array);

//REVERSE - змінює порядок елементів в масиві на веверсивний


//SLICE - вирізає частину масива (певну кількість елементів)

let slice = concat.slice(0,4); // виріжеться з 0 по 3 включно (значення індексів)
console.log(slice);  //повертає нам самі елементи, які вирізані (для подальшого застосування)
console.log(concat); //оновлений масив з вирізаними елементами

//SPLICE - видалення елементів (розширене)

arr.splice(0,2,'royalty')
//0 - індекс,починаючи з якого починаємо видаляти
//2 - кількіть елементів, які будуть видалені
//інші значення - це елементи(значення), які стануть на місце видалених з масиву елементів


//INCLUDES - перевірка наявності в масиві, конкретних елементів (працює і з стрінгою, бо стрінга є масивом)

console.log('hello'.includes('l'));   //true



//джерело в інтернеті - array JS method




///-------------------------------------Функції масивів з Колбеками-------------------------------------///

//метод forEach



let options = [
    {id:1, name: 'Artur', age: 25, status: 'true'},
    {id:2, name: 'Berta', age: 36, status: 'true'},
    {id:3, name: 'John', age: 27, status: 'true'},
    {id:4, name: 'Max', age: 26, status: 'true'}
]

options.forEach(value => console.log(value));
//forEach виконує щось для value (тобто, для кожного елемента, який знаходиться в нашому масиві Users)





//метод фільтрації - filter- відфільтровує елементи, створює новий масив з відфільтрованими елементами, а попередній масив залеишається незміненим


let optionsFilter = options.filter(value => value.age > 27);
console.log(optionsFilter);
console.log(options);



//MAP - створює новий об'єкт (мапування об'єкта з нашого масива до НОВОГО ОБ'ЄКТА....новий масив з НОВИМ об'єктом)

let mapOptions = options.map(function (value, index) {
    let newOption = {
        name: value.name,
        age: value.age,
        id: index+1
    }
    return newOption;
})
console.log(mapOptions);
console.log(options);



// метод FIND - те саме, що і фільтр (.filter), тільки перше входження. Задаємо параметр для фільтра, знайде і поверне нам тільки перший елемент

let find = options.find(value => value.name === 'Max');
console.log(find);




// методи every та some

// every - перевіряє чи кожен елемент в нашому масиві має статус true, або інший конкретно заданий параметр
// some - перевіряє чи хоча б один елемент має конкретно заданий нами параметр

let every = options.every(value => value.status);
console.log(every);

let some = options.some(value => value.status);
console.log(some);



//метод SORT - сортує по парах (порівнює 1 та 2 юзера, далі 2 та 3, далі 3 та 4). Визначає різницю і важчий елемент пірнає вниз. Таким чином значення вибудовуються від меншого до більшого.

//1) Визначає сортування по парах
//2) Задаємо принцип сортування

//сортування за віком від меншого до більшого
let sort =
options.sort((a, b) => a.age - b.age)
console.log(sort);

//сортування по імені (береться показник довжини та ASCII кодів)
let sortName = options.sort((a,b)=> {
    if (a.name > b.name) {return 1}
    if (a.name < b.name) {return -1}
    if (a.name === b.name) {return 0}
})
console.log(sortName);




//Метол REDUCE
//зменшення//з 10 об'єктів можна зробити 2 об'єкти. Розглянемо на прикладі:

let reduce = options.reduce((previousValue, currentValue) => {
    if (currentValue.status) {
        previousValue.statT.push(currentValue)
    }
    else {
        previousValue.statF.push(currentValue)
    }
    return previousValue;
},{statT:[], statF:[]})
console.log(reduce)



//Метод F(f) - Функція, яка приймає в себе ще одну фукцію
//описано в блокноті











































