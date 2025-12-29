// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів


const randomsArray = [
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},
    {title: 'lamps', price: 1200},

    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},
    {title: 'radio', price: 700},

    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},
    {title: 'tv', price: 12000},

    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},
    {title: 'keyboard', price: 2300},

    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},
    {title: 'monitor', price: 4500},

    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},
    {title: 'mouse', price: 650},

    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},
    {title: 'table', price: 6500},

    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},
    {title: 'lapTop', price: 18900},

    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},
    {title: 'calc', price: 1200},

    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000},
    {title: 'wallboard', price: 2000}
];  // можна було згенерувати але вже...

const itemsPerPage = 10;
let currentPage = 1;

// дістаюсь до елементів
const opening = document.querySelector('.opening');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showPage() {

    opening.innerHTML = ''; // очистити

    const start = (currentPage - 1) * itemsPerPage;    // що показуємо
    const end = start + itemsPerPage;
    const itemsToShow = randomsArray.slice(start, end);

    // Додаю кожен товар у .opening
    itemsToShow.forEach(item => {
        // Створюю окремо блок для товару + стилізую його тут
        const block = document.createElement('div');
        block.textContent = `${item.title.toUpperCase()} — ${item.price} грн`;
        block.style = `
            background: white;
            color: black;
            padding: 10px;
            margin-top:10px;
            border-radius: 10px;
            text-align: center;
            font-size: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        `;
        opening.appendChild(block);
    });
}

// Кнопка Prev.
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage();
    }
});

// Кнопка Next.
nextBtn.addEventListener('click', () => {
    if (currentPage * itemsPerPage < randomsArray.length) {
        currentPage++;
        showPage();
    }
});
showPage();   // транслюю перші 10 при завантаженні сторінки


//---------------------------------------------end--------------------------------------------------//