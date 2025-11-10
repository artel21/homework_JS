//Lesson 20
//інкрементація - збільшення

/*
let x = 0;
x = x + 1;
console.log(x); // 1

x++; // інкремент
console.log(x); // 2

x +1:
console.log(x); // 3

//декрементація - зменшення
x = x - 1;
console.log(x); // 2

x -= 1;
console.log(x); // 1

x --; //декремент
console.log(x); // 0

//різновиди інкрементів (детально розписано в блокноті)
// - постфіксні x++
// - префіксні ++x             */

//================================================================================

//Lesson21
//ЦИКЛИ
//for   of
/*
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
debugger;
for (let user of users) {
    console.log(user.name);
}
*/

//=========================================================

//lesson22
//ЦИКЛ FOR
/*
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let i = 0; i<users.length; i++) {
    console.log(users[i]);
}


for (let i = 2; i<users.length - 1; i++) {
    //це буде означати, що почнеться з 2 елемента і закінчиться передостаннім
    console.log(users[i]);
}

*/
//щоб зробити покрокове виконання додаємо debugger
//5 кнопками ми можемо зайти в середину циклу
/*
//Є ще вункція document.write
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let i = 0; i<users.length; i++) {
    document.write('<h3>${users[i].name}</h3>');
    //console.log(users[i]);
}

//itar  - команда, яка викликає (будує) новий цикл на основі  попереднього масиву
for (let i = 0; i < users.length; i++) {
    const user = users[i];

}
*/
//==========================================================================================
//Lesson23
//Цикл FOR IN
/*
let user = {
    name: 'John',
    id: 1,
    age: 12
}

for (let fieldName in user) {
    console.log(fieldName)        //команда дозволяє взяти USER і сприйняти його як асоціативний масив/виводимо тільки поля, в середині об'єкта
    console.log(user[fieldName])  // ця команда виводить значення полів в середині об'єкта
}

*/
//=================================================================================


//Lesson24
//Цикл WHILE

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let i = 0;
while ( i < users.length) {let user = users[i]; console.log(user); i++;}


//==================================================================================




























