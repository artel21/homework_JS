//========================================LESSON 57=================================================//

//=========================================ПОДІЇ====================================================//

//event - це комунікація клієнта з сайтом
//наприклад: клік, перезавантаження сторінки, вихід за межі сторінки, ведення мишкою, тощо

//Знайти всі events // JS EVENTS LIST  - тут події згруповані по категоріях (індексах) (події анамації, події буфера обміну і т.д.)

//наприклад маємо div (елемент, який створений в HTML-мтруктурі)

//знаходимо елемент в DOM
let target = document.getElementById('target');

//надаємо йому подію/ визначаємо аргумент (всі характеристики події по відношенню до цього елемента)
//ONCLICK
target.onclick = function (ev) {
    console.log('click');
    console.log(ev);
}

//ONMOUSEMOVE
target.onmousemove = function (ev) {
    console.log(ev.clientX, ev.clientY);
    let r = ev.clientX;
    let g = ev.clientX;
    let b = ev.clientY;
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

//addEventListener() - якщо нам потрібно додати до об'єкта EVENT( а не перевизначити подію в цьому об'єкті)

target.addEventListener('click', function (ev) {
    console.log(ev);
})

//onmouseover - коли заводимо мишку в об'єкт
target.onmouseover = function (ev) {console.log('over')}

//onmouseleave - коли виводимо мишку з об'єкта
target.onmouseleave = function (ev) {console.log('leave')}

//heatmap - система, яка візуалізує поведінку користувачів сайту (куди частіше клікають користувачі).
//робиться це за допомогою EVENT-ів

//oninput
let input = document.getElementById('in');
input.oninput = function () {
    target.innerText = this.value
}


//відправити форму
//доступаємось до форми
let f1 = document.forms.f1;
//робимо заборону дефолтної відправки форми через сабміт
f1.onsubmit = function (ev) {
    ev.preventDefault();
    console.log('hello');
    //звертаємось до username і одразу створюємо об'єкт, який виведемо
    let user = {name:this.username.value}
    console.log(user);     // замість консолі відправити в local Storage/або fetch api
}


//preventDefault() - заборонити об'єкту події ..події за замовчуванням (наприклад, submit перезавантаження сторінки за замовчуванням)

//onload - подія, яка дозволяє відстежувати чи завантажувалось наше браузерне вікно
window.onload = function () {
    console.log('load');
}

//onreadystatechange - подія, яка визначає readyState - стан готовності сторінки:
//interactive - відбувається комунікація між браузером та документом
//complete - коли сторінка повністю провантажується у вікні браузера
//load - відпрацювання конкретної події на сторінці

//беручи за основу стани готовності сторінки, ми можемо на конкретних етапах використовуючи if додати прелоудери чи іншу інформацію на сайт. наприклад:

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        document.body.innerText = 'сторінка завантажується. куди ти спішиш?';
    }
    if (document.readyState === 'complete') {
        document.body.innerText = 'готово! А ти хвилювався...';
    }
}
