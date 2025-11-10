//#SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент

let foobar  = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
    return arr         //повертає масив
}

foobar ([1,2,3,4,5])