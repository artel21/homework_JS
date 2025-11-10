//нехій в нас буде масив users, який містить 4 об'єкти з даними про користувачів

//МАСИВ З ОБ'ЄКТАМИ
let users = [
    {id:1,name:'vasil',age: 31,status:true},
    {id:2,name:'petya',age: 33,status:false},
    {id:3,name:'anna',age: 28,status:true},
    {id:4,name:'olya',age: 29,status:false},
];
console.log(users);
console.log(users[0]['age']);//варік 1 / звернення до ключа age в першому об'єкті масиву users
console.log(users[0].age);//варік 2/звернення до ключа age в першому об'єкті масиву users

//Щоб зменшити навантаження код, ми можемо зробити наступне:

let user0 = users[0];
console.log(user0.age);

//МАСИВ З МАСИВАТИ
let users01 = [
    {skills:['js'],id:1,name:'vasil',age: 31,status:true},
    {skills:['mongo', 'html'],id:2,name:'petya',age: 33,status:false},
    {skills:['js'],id:3,name:'anna',age: 28,status:true},
    {skills:['js'],id:4,name:'olya',age: 29,status:false},
];
console.log(users01[1].skills[0]);//!!! звернення до mongo
