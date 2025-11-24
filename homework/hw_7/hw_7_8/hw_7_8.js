//#zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name,  age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    constructor(name, age, slipper){
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('Anna',20, 34),
    new Cinderella('lena',21, 35),
    new Cinderella('Vira',23, 36),
    new Cinderella('Olya',18, 33),
    new Cinderella('Ulyana',29, 39),
    new Cinderella('Ira',32, 40),
    new Cinderella('Yana',29, 41),
    new Cinderella('Yanina',25, 42),
    new Cinderella('Valentina',28, 38),
    new Cinderella('Olimpia',34, 44),
]

const prince = new Prince('Ivan', 45, 44)

//за доп ітерації циклом

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipper){
//         prince.wife = cinderella
//     }
// }

// за допомогою Find
const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper)
prince.wife = cinderellaMain
console.log(`prince.wife`, prince.wife)
