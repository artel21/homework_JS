//======================================================LESSON 56======================================================//

//================================================Створення ДОМ елементів==============================================//

let users = [
    {name: 'Artur', status: 'active'},
    {name: 'Artur-2', status: 'passive'},
    {name: 'Artur-3', status: 'aggressive'},
]

for (let user of users) {
    let usersInfoDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = user.name;
    let p = document.createElement('p');
    p.innerText = user.status;

    usersInfoDiv.append(h2, p);

    document.body.appendChild(usersInfoDiv);
}