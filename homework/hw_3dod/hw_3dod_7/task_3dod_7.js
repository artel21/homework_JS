//#u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let coursesTitleArray = [
    'JavaScript Complex',
    false,
    'Python Complex',
    'QA Complex',
    true,
    'Frontend',
    1235,
    false,
    1235,
    true
]

for (let i = 0; i < coursesTitleArray.length; i++){
    if (typeof coursesTitleArray[i] === 'boolean'){console.log(coursesTitleArray[i])}}