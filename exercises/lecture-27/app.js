const ul = document.querySelector("ul");
const input = document.getElementById("item");

let itemsArray = JSON.parse(localStorage.getItem("items")) || [];

function addTask(text) {
    const newLi = document.createElement("li");
    newLi.textContent = text;
    ul.appendChild(newLi);
}

itemsArray.forEach((item) => addTask(item));

function add() {
    const newTodo = input.value;
    itemsArray.push(newTodo);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(newTodo);
    input.value = "";
}

function del() {
    localStorage.removeItem("items");
    itemsArray = [];
    ul.innerHTML = "";
}
