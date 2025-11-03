//#9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let coursesTitleArray = [
    'JavaScript Complex',
    false,
    'Python Complex',
    'QA Complex',
    true,
    'Frontend',
    1235,
    false,
    6789,
    true
]

for (let i = 0; i < coursesTitleArray.length; i++){
    if (typeof coursesTitleArray[i] === 'number'){console.log(coursesTitleArray[i])}}