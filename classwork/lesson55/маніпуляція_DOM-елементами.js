//=======================================================LESSON 55=================================================//
//-------------------------------------Маніпуляція ДОМ елементами-------------------------------------------------//

//наприклад у нас є клас 'target', в якому є текст та інші елементи

//1) Вивести текст
//console.log(target.innerText)

//2) Доступитись до характеристик CSS
//console.log(target.style.background = 'silver')

//3) Додати клас
//target.classList.add('foobar')

//4) Витягуємо клас за певним індексом
//console.log(target.classList.item(0))

//5) Перевіряємо чи існує клас з певною назвою в ДОМ
//console.log(target.classList.contains('foobar'))

//6) Витягнути значення атрибута('id', 'class', 'style'  і т.д)
//console.log(target.getAttribute('id'))

//7) Витягнути елемент, який знаходиться ДО елемента, з яким ми працюємо
//console.log(target.previousElementSibling)

//8) Витягнути елемент, який знаходиться ПІСЛЯ елемента, з яким ми працюємо
//console.log(target.nextElementSibling)

//9) Знайти всі ДОЧІРНІ елементи (повертає HTML-об'єкти)
//console.log(target.children)

//10) Знайти всі ДОЧІРНІ елементи (повертає ВУЗОЛ)
//console.log(target.childNodes)

//11) Побачити обгортку БАТЬКІВСЬКОГО елемента
//target.outer.html
