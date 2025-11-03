//#mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


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
    if (typeof coursesTitleArray[i] === 'string'){console.log(coursesTitleArray[i])}}
