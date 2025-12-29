// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const someForm = document.forms.someForm;

//someForm.onsubmit = () {};
const answer01 = document.getElementById("answer01");
someForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    answer01.innerText = `${obj.nameValue}, ${obj.surnameValue}, ${obj.ageValue}`;
});







