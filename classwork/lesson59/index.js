

let productsDiv = document.getElementsByClassName("products")[0];

let products = [
    {
        title: 'lamp_1',
        price: 1000,
        image: 'https://evrosvet.com.ua/upload/iblock/911/911d2aec99980dad659000b3f65df1a0.jpg',
    },
    {
        title: 'lamp_2',
        price: 1500,
        image: 'https://evrosvet.com.ua/upload/iblock/911/911d2aec99980dad659000b3f65df1a0.jpg',
    },
    {
        title: 'lamp_3',
        price: 2000,
        image: 'https://evrosvet.com.ua/upload/iblock/911/911d2aec99980dad659000b3f65df1a0.jpg',
    },
]


for (const product of products) {
    let productBlock = document.createElement('div'); //створюємо для кожного об'єкта свій окремий ДІВ

    let h2 = document.createElement('h2');
    h2.innerText = `${product.title} - ${product.price} UAH`;

    let img = document.createElement('img');
    img.src = product.image;

    let buttonElement = document.createElement('button')
    buttonElement.innerText = 'add to cart';

    //тепер додаємо подію на кнопку
    buttonElement.onclick = function () {
         if (!localStorage.getItem('cart')) {
             //перевірка//якщо в середині localStorage нічого немає - то ти будеш пустим масивом
             //а якщо в середині щось є (колись ми додавали щось в корзину)- то буде корзина з товарами
             //і ми одразу парсимо JSON-обє'кт і працюємо з звичайним масивом
             let cart = JSON.parse(localStorage.getItem('cart')) || []
             //додати в корзину (в масив) продукт, до якого прив'язана кнопка
             cart.push(product);//потрапить саме той продукт, тому що ми ітеруємо
             localStorage.setItem('cart', JSON.stringify(cart)); // додаємо в LS
         }
    }

    productBlock.append(h2,img, buttonElement);
    productsDiv.appendChild(productBlock);
}

//localStorage - дає багато можливостей, не тільки корзина....