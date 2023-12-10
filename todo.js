const inputBox = document.getElementById("input");
const todoList = document.getElementById("todolist");

function addTask() {
    if (inputBox.value === '') {
        alert("You must enter Your Task!");
    }
    else {
        let li = document.createElement("li"); //creating list to add input as list 
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        let span = document.createElement("span");  //creating x to delete input list
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
}
function showData() {
    todoList.innerHTML = localStorage.getItem("data");
}
showData();