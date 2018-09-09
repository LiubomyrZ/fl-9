let rootNode = document.getElementById('root');
const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];


let title = document.createElement('h1');
title.className = 'title';
title.innerText = 'Simple TODO application';
rootNode.appendChild(title);

let button = document.createElement('div');
button.className = 'addTask';
button.innerText = 'Add new Task';
rootNode.appendChild(button);

let empty = document.createElement('div');
empty.className = 'empty';
empty.innerText = 'TODO is empty';
rootNode.appendChild(empty);

button.onclick = function () {
    rootNode.innerHTML = null;
    let title = document.createElement('h1');
    title.className = 'title';
    title.innerText = 'Add task';
    rootNode.appendChild(title);

    let conteiner = document.createElement('div');
    conteiner.className = 'conteiner';
    rootNode.appendChild(conteiner);

    let inputHolder = document.createElement('div');
    inputHolder.className = 'inputHolder';
    conteiner.appendChild(inputHolder);

    let input = document.createElement('input');
    input.className = 'input';
    inputHolder.appendChild(input);

    let bottom = document.createElement('div');
    bottom.className = 'bottom';
    conteiner.appendChild(bottom);


    let butleft = document.createElement('div');
    butleft.className = 'conteiner';
    butleft.innerText = 'Cansl';
    bottom.appendChild(butleft);

    let butright = document.createElement('div');
    butright.className = 'conteiner';
    butright.innerText = 'Save changes';
    bottom.appendChild(butright);
}
