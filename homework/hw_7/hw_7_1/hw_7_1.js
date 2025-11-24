//#XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name,surname,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}
let user = new User(1,'Artur', 'Bern', '+38067549825');
console.log(user)

let users = [
    new User(1,'Artur', 'Bern', '+38067589825'),
    new User(2,'Artur', 'Bern', '+38767549825'),
    new User(3,'Artur', 'Bern', '+38067549825'),
    new User(4,'Artur', 'Bern', '+38067549825'),
    new User(5,'Artur', 'Bern', '+38069549525'),
    new User(6,'Artur', 'Bern', '+38067549825'),
    new User(7,'Artur', 'Bern', '+38067549825'),
    new User(8,'Artur', 'Bern', '+38067546825'),
    new User(9,'Artur', 'Bern', '+38067949825'),
    new User(10,'Artur', 'Bern', '+38067349825')
]
console.log(users)