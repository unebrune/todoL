
const todoInput = document.querySelector(".inputField");
const todoButton = document.querySelector(".todo-button");
const todoList  = document.querySelector(".todoList");


todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    //TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //CREER LI
    const   newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //BUTTON
    const   trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //AJOUTER TODOLIST
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    //DELETE TOO
    if (item.classList[0]   === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
}
