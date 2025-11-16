// //#yo06d74c1C
// //
// // – є масив
// //
// const coursesAndDurationArray = [
//
//     {title: "JavaScript Complex", monthDuration: 5},
//
//     {title: "Java Complex", monthDuration: 6},
//
//     {title: "Python Complex", monthDuration: 6},
//
//     {title: "QA Complex", monthDuration: 4},
//
//     {title: "FullStack", monthDuration: 7},
//
//     {title: "Frontend", monthDuration: 4}
//
// ];
// //  — відсортувати його за спаданням за monthDuration
// //  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// //  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

//========================================================================================================//

const coursesAndDurationArray = [

    {title: "JavaScript Complex", monthDuration: 5},

    {title: "Java Complex", monthDuration: 6},

    {title: "Python Complex", monthDuration: 6},

    {title: "QA Complex", monthDuration: 4},

    {title: "FullStack", monthDuration: 7},

    {title: "Frontend", monthDuration: 4}
]

//ex 1

// const result = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration>5)
//     .map((value, index) => {
//         value.id = index + 1;
//         return value
//     })
// console.log(result)


//ex2 // зі "...спредом" // "інлайн формат"

const result = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration>5)
    .map((value, index) => ({...value, id: index+1}))
console.log(result)







//  — відсортувати його за спаданням за monthDuration





//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}



