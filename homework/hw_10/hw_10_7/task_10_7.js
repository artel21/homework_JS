// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd ) {
    const listItems = localStorage.getItem(arrayName);
    if (!listItems) {
        throw new Error("No item found");
    }

    const array = JSON.parse(listItems);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('sessionsList', {title: 'testSessionList'});