let a = 'asd'
console.log(typeof a, a);

let c = `asd`;
console.log(typeof c, c);

//конкатинація-обєднання кількох стрінгів у речення

let greeting = 'hello';
let intro = ' my name is vasya';

let msg = greeting + intro;
console.log(msg);

//використання шаблонного визначення стрінгів+конкатинація

let msg2 = `${greeting}${intro}`; //(використання ІНТЕРПОЛЯЦІЇ)
console.log(msg2);

//шаблонний метод не потрібно використовувати на постійній основі. Перший метод (без інтерполяції) краще сприймається браузером