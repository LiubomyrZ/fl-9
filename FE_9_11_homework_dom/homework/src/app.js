document.onload = function(){
let rootNode = document.getElementById("root");

let listUl = document.createElement("ul");
listUl.id = "liHolder";
rootNode.appendChild(listUl);

document.getElementById("addLi").addEventListener("click", function(){
    let node = document.createElement("li");
    node.className = "listItem";
    document.getElementById("liHolder").appendChild(node);
    
    let check = document.createElement("i");
    check.className = "liHolder";
    document.getElementsByClassName(listItem).appendChild(check);
    check.innerText = "check_box_outline_blank";


    let textnode = document.createTextNode("Find the cat");
    node.appendChild(textnode);
    textnode.innerText = document.getElementById('liName').value

    let deleteItem = document.createElement("i");
    deleteItem.className = "delete";
    document.getElementsByClassName(listItem).appendChild(deleteItem);
    deleteItem.innerText = "delete";

    document.getElementsByClassName("liHolder").addEventListener("click", function(){
        getElementsByClassName("liHolder").innerHTML = "check_box";
    });
    
});
let futer = document.createElement("div");
rootNode.appendChild(futer);
let x = document.createElement("IMG");
futer.appendChild(x);

}

