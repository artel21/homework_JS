//-----------------------------------------КЛАСИ ТА НАСЛІДУВАННЯ-------------------------------------------//

// Класи - це синтаксичні конструкції.

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {                            // Якщо функція в середині класу - це метод
        return "Hello! My name is " + this.name;
    }
}
let person = new Persons('Artur', 31);

console.log(person);   //виводимо клас

console.log(person.greeting());   //виводимо функцію



//--------------------------------Приклади наслідування--------------------------------------------//

//в циклі// Коли нам потрібно в іншому новому циклі (нащадку Customer) впровадити логіку якогось існуючого циклу (батьківського Persons)

//створюємо новий  клас


class Customers extends Persons {
    //генеруємо constructor
    constructor(name, age, password) {
        super(name, age); // аргументи з батьківського елемента
        this.password = password;  //це наш новий аргумент, який доданий Customers
    }
}

// наслідування може бути і між функціями (без класів)  ....блокнот




