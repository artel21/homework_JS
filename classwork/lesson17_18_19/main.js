//логічні розгалуження
// є блок if (булевий вираз) та {блок ініціалізації}
//блок if else / використовуємо при одиничних перевірках



//let color = 'red';
//if ('color' === 'red') {console.log(stop);}
//else{console.log('go!');}
//else if (color === 'yellow'){console.log('wait');}
//else if (color === 'red'){console.log('stop');}

//video lesson 17




//блок SWITCH оператори Case та break//використовуємо при множинних перевірках

//let color = prompt('enter color');
//switch(color){
//    case 'green': console.log('go'); break;
//    case 'yellow': console.log('wait'); break;
//    case 'red': console.log('stop'); break;
//    default:   console.log('non'); break;
//}

//Тернарні оператори

let obj = {
    id: 1,
    name: 'John',
    age: 19,
}

//let access;
//if(obj.age > 18){access=true;}
   // else{access=true;}

//тепер напишемо це саме по іншому

let access = obj.age > 18 ? true : false;
console.log(access);