// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const buttons = document.getElementsByTagName('button');
const button = buttons[0];
button.onclick = function () {
    const div = document.getElementById('text');  //або ч-з addEventListener (додаючи, а не перевизначаючи)
    div.style.display = 'none';
}