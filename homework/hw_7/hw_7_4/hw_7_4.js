//
// #nkMXISv
//
// – створити клас для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client


function Client(id, name, surname, email, phone, products = []) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

let clients = [

    new Client(
        1,
        'Олег',
        'Іванов',
        'oleg@mail.com',
        '+380971234567',
        ['смартфон', 'чохол', 'захисне скло', 'павербанк']
    ),

    new Client(
        2,
        'Марія',
        'Петренко',
        'maria@gmail.com',
        '+380991112233',
        ['ноутбук']
    ),

    new Client(
        3,
        'Іван',
        'Сидоренко',
        'ivan@ukr.net',
        '+380631234455',
        ['смартфон', 'чохол', 'захисне скло', 'павербанк']
    ),

    new Client(
        4,
        'Анна',
        'Коваленко',
        'anna@yahoo.com',
        '+380671234566',
        ['холодильник', 'мікрохвильовка']
    ),

    new Client(
        5,
        'Петро',
        'Бондаренко',
        'petro@gmail.com',
        '+380951112288',
        ['праска']
    ),

    new Client(
        6,
        'Софія',
        'Ткаченко',
        'sofia@mail.com',
        '+380931234499',
        ['телевізор', 'саундбар', 'пульт']
    ),

    new Client(
        7,
        'Дмитро',
        'Шевченко',
        'dmytro@ukr.net',
        '+380681234577',
        ['мишка', 'клавіатура', 'монітор', 'веб-камера']
    ),

    new Client(
        8,
        'Юлія',
        'Мельник',
        'yulia@gmail.com',
        '+380661234588',
        ['кавоварка', 'чайник']
    ),

    new Client(
        9,
        'Василь',
        'Кравченко',
        'vasyl@meta.ua',
        '+380981234599',
        ['пилосос', 'робот-пилосос']
    ),

    new Client(
        10,
        'Олена',
        'Лисенко',
        'olena@mail.com',
        '+380501234511',
        ['планшет']
    )
]

clients.forEach(client => {
    console.log(`ID: ${client.id} Ім’я: ${client.name} Замовлення:`, client.order)
}
)