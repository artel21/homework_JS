//#pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

let users = [
    new User(3,'Artur', 'Bern', '+38067 589825'),
    new User(2,'Artur', 'Bern', '+38767 549825'),
    new User(1,'Artur', 'Bern', '+38067 549825'),
    new User(4,'Artur', 'Bern', '+38067 549825'),
    new User(5,'Artur', 'Bern', '+38069 549525'),
    new User(10,'Artur', 'Bern', '+38067 549825'),
    new User(7,'Artur', 'Bern', '+38067 549825'),
    new User(8,'Artur', 'Bern', '+38067 546825'),
    new User(9,'Artur', 'Bern', '+38067 949825'),
    new User(6,'Artur', 'Bern', '+38067 349825')
];

console.log(users.sort((a, b) => a.id - b.id));

