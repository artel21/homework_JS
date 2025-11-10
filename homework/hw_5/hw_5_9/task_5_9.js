//#bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.


let foobar = (arrayUsers) =>{
    for (const User of arrayUsers) {
        document.write(`<div> ${User.id} ${User.name} ${User.age} </div>`)
    }
    return arrayUsers;              //повертає масив
}
foobar([
    {id: 1,name: 'Artur', age: 45},
    {id: 2,name: 'Artur', age: 18},
    {id: 3,name: 'Artur', age: 36},
    {id: 4,name: 'Artur', age: 45},
    {id: 5,name: 'Artur', age: 25},
    {id: 6,name: 'Artur', age: 45},
    {id: 7,name: 'Artur', age: 55},
    {id: 8,name: 'Artur', age: 25},
    {id: 9,name: 'Artur', age: 31},
    {id: 10,name: 'Artur', age: 39},
    ]
)