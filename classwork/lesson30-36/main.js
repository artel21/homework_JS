///------------------------------Функціональні вирази--------------------------------------///

//Function Expresion (функціональний вираз)

greeting()     //можна викликати будь де....(Hoisting)
function greeting() {
    console.log("Hello World!");
}

//якщо функція оголошена змінною

greeting();   //функція викликана НЕ буде
let f = function () {
    console.log("Hello!");   //
}


///-------------------------------Стрілочні фцнкції--------------------------------------///

// в стрілочних функціях не існує arguments
// в стрілочній фінкції уже закладено Return з замовчуванням
//якщо return не потрібен - то => console.log (консоль також функція, яка не містить return)

let calc = (a,b) => a+b; console.log(calc(10,20));




///---------------------------Функції в об'єктах та контекст this-------------------------///

//якщо у нас є функція в об♥9єкті...ми можемо використовувати THIS. який посилається на назву об'єкта
//В стрілочних функцях THIS працювати не буде




///----------------------=====--------Замикання------------------------------------------///
//example1

function asd() {
    let x = 10;
    function inner () {
        return x++;
    }
    return inner;
}
let foo = asd();
console.log(foo);
console.log(foo);

//example2

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {return user.name; },                //замикання
        getAge() {return user.age; },                  //замикання
        setAge(age) {                            //щоб зміними значення вводимо
            if(age>0){user.age=age}
            return user.age
             }
    }
}

let builder = userBuilder('Artur',31);
console.log(builder);

console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(100)
console.log(builder.getAge());



///----------------------------------Рекурсія--------------------------------------------///



///---------------------------------Генератори * ---------------------------------------///


///---------------------------------обробка Error-------------------------------------///






