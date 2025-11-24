//--------------------------------------------lesson 41----------------------------------------------------//

//------------------------------------Функції-конструктори-------------------------------------------------//

//ф-конструктор дозволяє зробити структуру (шаблон), яку можна застосувати при кожному новому виклику цієї функції, тільки підмінюючи аргументи

//ф- конструктор  - створює об'єкт
//ф -конструктор не має return (нічого не повертає)

function User(name, age, status) {
    this.name = name;                    //це наш шаблон
    this.age = age;                     //це наш шаблон
    this.status = status;              //це наш шаблон
}
let user1 = new User('Artur', 25, true); console.log(user1);
let user2 = new User('Max', 36, true); console.log(user2);
let user3 = new User('Jack', 37, false); console.log(user3);



//якщо в об'єкті є внутрішній об'єкт
//існує 2 підходи

    //КОМПОЗИЦІЯ

function UserBase(name, age, status, wife) {
    this.name = name;                      //це наш шаблон
    this.age = age;                       //це наш шаблон
    this.status = status;                //це наш шаблон
    this.wife = wife;                   //це наш шаблон
}
let user4 = new UserBase('Artur', 25, true, {name: 'Anna'}); console.log(user4);

    //АГРЕГАЦІЯ

function UserBase_(name, age, status, wifeName, wifeAge) {
    this.name = name;                                              //це наш шаблон
    this.age = age;                                               //це наш шаблон
    this.status = status;                                        //це наш шаблон
    this.wife = {name: wifeName, age: wifeAge};                 //це наш шаблон
}
let user5 = new UserBase_('Artur', 25, true, 'Vira', 31); console.log(user5);


// також в цей конструктор-шаблон можна додавати функцію.






