//припустимо у нас є якісь дані користувача (номер/ім'я/вік) і нам потрібно це все запакувати в один об'єкт

//let user1Id = 1
//let user1Name = "vasil";
//let user1Age = 39;

//щоб окремо не ввдодити велику кількість інф

let user1= {
    id: 1,
    name: "vasil",
    age: 39
}
console.log(user1);
console.log(user1.id);//звернутися конкретно до якогось об'єкта в полі
console.log(user1['age']);

//ctrl - згорнути

//щоб вивести конкретний скіл "css"
let user2= {
    id: 2,
    name: "alex",
    age: 25,
    skills: ['html', 'css', 'js', 'css'],
}
console.log(user2.skills[3]);

