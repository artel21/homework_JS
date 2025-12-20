//     #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

const div = document.createElement('div'); //створили блок

div.classList.add('wrap');                                         //створили класи
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
let cloneNode = div.cloneNode(true);             // клонуємо елемент разом з наповненням, обов'язково true
document.body.append(div, cloneNode);                           // додаємо в html-структуру


