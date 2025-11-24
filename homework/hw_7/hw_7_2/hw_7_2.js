//#2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
function User(id, name,surname,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let users = [
    new User(1,'Artur', 'Bern', '+38067 589825'),
    new User(2,'Artur', 'Bern', '+38767 549825'),
    new User(3,'Artur', 'Bern', '+38067 549825'),
    new User(4,'Artur', 'Bern', '+38067 549825'),
    new User(5,'Artur', 'Bern', '+38069 549525'),
    new User(6,'Artur', 'Bern', '+38067 549825'),
    new User(7,'Artur', 'Bern', '+38067 549825'),
    new User(8,'Artur', 'Bern', '+38067 546825'),
    new User(9,'Artur', 'Bern', '+38067 949825'),
    new User(10,'Artur', 'Bern', '+38067 349825')
];

const filterFunction = user => user.id % 2 === 0
const resultUsers = users.filter(filterFunction)
console.log('парні id',resultUsers)