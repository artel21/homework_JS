// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const input = document.getElementById('balance');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    const kg = + this.value
    let result = kg*2.2;
    resultDiv.textContent = result;
}