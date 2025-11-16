//#bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

function stringToarray(str){
    if(str){
        const split = str.split(' ');
        return split;
    }
    return [''];
}
console.log(stringToarray(`"Ревуть", "воли", "як", "ясла", "повні"`))