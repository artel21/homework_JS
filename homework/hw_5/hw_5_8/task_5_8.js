//#gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let foobar = (arrayOfPrimitives) => {
    document.write(`<ul>`)
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
    return arrayOfPrimitives;               //повертає масив
}
foobar([12,65,7,8,'red','green','blue',true]);