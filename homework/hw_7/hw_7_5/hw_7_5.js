//#8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [

    new Client(
        1,
        'Олег',
        'Іванов',
        'oleg@mail.com',
        '+380971234567',
        [{title:'смартфон', price: 12000}, {title:'захисне скло', price: 2000}, {title:'павербанк', price: 4000}]
    ),

    new Client(
        2,
        'Марія',
        'Петренко',
        'maria@gmail.com',
        '+380991112233',
        [{title:'ноутбук', price: 17000}]
    ),

    new Client(
        3,
        'Іван',
        'Сидоренко',
        'ivan@ukr.net',
        '+380631234455',
        [{title:'смартфон', price: 10000}, {title:'чохол',price:1500}, {title:'павербанк',price:4000}]
    ),

    new Client(
        4,
        'Анна',
        'Коваленко',
        'anna@yahoo.com',
        '+380671234566',
        [{title:'холодильник',price: 15000},{title:'мікрохвильовка', price: 3000}]
    ),

    new Client(
        5,
        'Петро',
        'Бондаренко',
        'petro@gmail.com',
        '+380951112288',
        [{title: 'праска', price: 2000}]
    ),

    new Client(
        6,
        'Софія',
        'Ткаченко',
        'sofia@mail.com',
        '+380931234499',
        [{title:'телевізор',price: 21000}, {title:'саундбар', price: 22000}, {title:'пульт', price: 500}]
    ),

    new Client(
        7,
        'Дмитро',
        'Шевченко',
        'dmytro@ukr.net',
        '+380681234577',
        [{title:'мишка',price: 1000}, {title:'клавіатура', price:2000}, {title:'монітор', price:5000}, {title:'веб-камера',price: 2800}]
    ),

    new Client(
        8,
        'Юлія',
        'Мельник',
        'yulia@gmail.com',
        '+380661234588',
        [{title:'кавоварка',price: 6500}, {title: 'чайник', price: 1500}]
    ),

    new Client(
        9,
        'Василь',
        'Кравченко',
        'vasyl@meta.ua',
        '+380981234599',
        [{title:'пилосос', price: 5000}, {title:'робот-пилосос', price:16000}]
    ),

    new Client(
        10,
        'Олена',
        'Лисенко',
        'olena@mail.com',
        '+380501234511',
        [{title:'планшет', price: 7000}]
    )
]

const sort = clients.sort((a, b) =>
    a.order.length - b.order.length)
console.log(sort)

