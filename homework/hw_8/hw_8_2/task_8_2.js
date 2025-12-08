//#AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function clonner (obj) {
    if (obj) {
        let functions = []
        for (let key in obj) {
            if(typeof obj[key] === 'function') {
                functionClone = obj[key].bind({})
                functions.push({functionClone, key});
            }
        }
        // console.log(functions)
        // const s = JSON.stringify(obj);
        // const parse = JSON.parse(s);                            //розширено
        // console.log(parse);
        // parse[functions[0].key] = functions[0].functionClone;
        // parse[functions[1].key] = functions[1].functionClone;   // без ітерації
        // return parse;

        const cloneObj=JSON.parse(JSON.stringify(obj))
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone                // ітеруємо, так як функцій може бути більше
        }
        console.log(cloneObj)
        return cloneObj
    }
    throw new Error('!!!')
}
clonner({id:1, name: 'Art', greeting(){}, foo(){}});