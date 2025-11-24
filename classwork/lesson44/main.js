//-----------------------------------------Робота з датами----------------------------------------------//

//методи , якими дістаємо інформацію з певного об'єкта
let user = new Date()
//getFullYear
//getMonth
//getDay
//getHours
//getMinutes
//getSeconds
//getMilliseconds
//getTime - в мілісекундах від початку обчислення часу в сисемі UNIX


//методи, створ.об♥9єкт з мин або майб датами

let date1 = new Date(1987,0,30,12,30,34)
console.log(date1)
let date2 = new Date('june 10 1987 12:00:00')                //стрінга
console.log(date2)


//методи, що дозволяють ЗМІНЮВАТИ

//date3.setDate(0) - сетери об'єкта....Є ще UTC - це загальна система часу 0-меридіан



//методи, що дозволяють визначити конкр.значення в об'єкті. Наприклад -
// let user = {
//     firstName: 'Jan',
//     lastName: 'Doe',
//     bDay: new Date(1987,0,30)
// }





//LESSON 45
//-----------------------------------------КОЛЕКЦІЇ SET---------------------------------------------//

//SET - це унікальний набір, в який можна помістити унікальні значення, діставати ці значення

//визначається за допомогою new Set   // Set.add - щоб щось додати в цей унікальний снисок

let set = new Set()
set.add('asd')
set.add('dsa')
set.add('asd')  // по помістить, бо в списку тільки унікальні значення
set.add('xxx')
console.log(set)

console.log(set.has('xxx'))   // дізнаємось, чи наявний в списку той чи інший об'єкт // true

set.delete('xxx')   // щоб видалити з set-у
console.log(set)

console.log(set.size)  //дізнаємось скільки об'єктів в середині SETу

set.forEach(value => console.log(value))     // можемо проітерувати наш SET

let arrayFromSet = Array.from(set)
console.log(arrayFromSet)

//Наприклад нам потрібно з існуючого масива взяти тільки унікальні значення і створити з них масив

let set1 = new Set([11,22,33,44,11,22,55])
console.log(set)
let numbers = Array.from(set1)
console.log(numbers)





//LESSON 46
//-----------------------------------Колекції MAP----------------------------------------------//

//використовуються для того, щоб робити асоціації між ключем та значенням
//між KEY та VALUES

//створити асоціацію

let map = new Map()
console.log(map)


//додати асоціацію
map.set(1, 'one')
map.set(2, 'two')
map.set(3, 'three')
console.log(map.get(2))   //виводить значення під 2-м ключем


//виводимо об'єкт (value), який знаходиться під відповідним ключем
let map1 = new Map()
console.log(map1)
map1.set('open', {title: 'spar', name: 'Max'})
map1.set('close', {title: 'spar', name: 'Jack'})
console.log(map1.get('close'))


//у якості ключа може бути об'єкт {id:'open'}
let map2 = new Map()
let open = {id:'open'}          // створюємо змінну
map2.set(open, {title: 'spar', name: 'Max'} )  //посилання на об'єкт
console.log(map2.get(open))


//видалення ключа з мапи
map.delete()

//почистити повністю
map.clear()

//розмір мапи
map.size

//показати всі ключі в мапі на даний момент
map.keys()
let from1 = Array.from(map.keys)
console.log(from1)

//витягнути окремо всі значення ключів
map.values()
let from2 = Array.from(map.values)
console.log(from2)


//---------------------------------------------------------------------------------------------//




