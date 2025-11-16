//#5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

function sortNums (arrayOfNums,direction){
    if(direction === 'ascending') return arrayOfNums.sort((a,b)=> a - b);
    if(direction === 'descending') return arrayOfNums.sort((a,b)=> b - a);
}
console.log(sortNums([11,21,3],'descending'));
console.log(sortNums([11,21,3],'ascending'));
