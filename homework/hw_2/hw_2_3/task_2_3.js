//#sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Book1',
    pageCount: 339,
    genre: 'art',
    authors: [
        {
            name: 'Alex'
        },
        {
            age: 50
        }
    ]
}
//----------------------

let book2 = {
    title: 'Book2',
    pageCount: 444,
    genre: 'art',
    authors: [
        {
            name: 'John'
        },
        {
            age: 45
        }
    ]
}

//---------------------

let book3 = {
    title: 'Book3',
    pageCount: 250,
    genre: 'art',
    authors: [
        {
            name: 'Bob'
        },
        {
            age: 34
        }
    ]
}

console.log(book1)
console.log(book2)
console.log(book3)