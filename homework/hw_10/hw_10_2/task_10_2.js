// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const inputUser = document.getElementById("inpOne");
const buttonUser = document.getElementById('btnOne');
const answerForUser = document.getElementById("answer");

buttonUser.onclick = function () {
    let userAge = inputUser.value;
    if (userAge < 18) {
        answerForUser.innerText = 'Sorry. Ваш вік не дозволить Вам перейти на наш сервіс';
        answerForUser.style.color = 'red';
    }
    else if (userAge => 18) {
        answerForUser.innerText = 'Welcome! Ласкаво просимо!';
        answerForUser.style.color = 'green';
    }
}