//#reLkOkTB29Q

// створити масив книжок (назва, кількість сторінок, автори , жанри).

let massiveBooks = [
    {
        title:'Думай і багатій',
        pages:256,
        author:'Наполеон Гілл',
        genre:'нонфікшн'
    },
    {
        title:'Дисципліна - це свобода',
        pages: 258,
        author:'Джоко Віллінк',
        genre:'нонфікшн, мотивація'
    },
    {
        title:'Історія Флоренції. Державець',
        pages:608,
        author:'Нікколо Макіавеллі',
        genre:'історія'
    },
    {
        title:'Вибір князя Гліба',
        pages:320,
        author:'Петро Кралюк, Олександр Красовицький',
        genre:'історія, роман, детектив'
    }
]

//знайти найбільшу книжку.

let maxResult01 = null;
let maxValue = 0;
for (let bigBook of massiveBooks) {
    if (bigBook.pages>maxValue) {
        maxValue = bigBook.pages; maxResult01 = bigBook
    }
}
console.log(`Книга найбільша: "${maxResult01.title}" — Сторінок: ${maxResult01.pages}`)


//знайти книжку/ки з найбільшою кількістю жанрів

let Result02 = null;
let maxGenre = 0;
for (let bigGenre of massiveBooks) {
    let genre02 = bigGenre.genre?.length || 0;
    if (genre02 > maxGenre) {
        maxGenre = genre02;
        Result02 = bigGenre}
}
console.log(`Книга з найб.к-стю жанрів: "${Result02.title}" — Жанри: ${Result02.genre}`)


// – знайти книжку/ки з найдовшою назвою

let Result03 = null;
let maxTitle = 0;
for (let bigTitle of massiveBooks) {
    let title03 = bigTitle.title?.length || 0;
    if (title03 >maxTitle) {
        maxTitle = title03;
        Result03 = bigTitle}
}
console.log(`Книга з найдовшою назвою: "${Result03.title}" — Назва: ${Result03.title}`)



//знайти книжку/ки, які писали 2 автори

let Result04 = null;
let maxAuthor = 2;
for (let bigAuthor of massiveBooks) {
    let author04 = bigAuthor.author?.length;
    if (author04 >= maxAuthor) {
        maxAuthor = author04;
        Result04 = bigAuthor}
}
console.log(`Книги з 2 авторами: "${Result04.title}" — Автори: ${Result04.author}`)


//знайти книжку/ки, які писав 1 автор

// наявність коми/ з інверсією
for (let onceAuthor of massiveBooks) {
    if (!onceAuthor.author.includes(',')) {
        console.log(`Книги з 1 автором: "${onceAuthor.title}" — Автор: ${onceAuthor.author}`);
    }
}