export default renderTodo;

class todo {
  constructor(title, dueDate, priority, notes, list) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.list = list;
    this.completed = false;
  }
}

function renderTodo() {
  const body = document.querySelector("body");
  const todoContainer = document.createElement("div");

  const addTodo = document.createElement("button");

  addTodo.id = "add";
  addTodo.innerText = "New ToDo";

  todoContainer.appendChild(addTodo);
  body.appendChild(todoContainer);

  let todoButton = document.getElementById("add");
  todoButton.onclick = () => {
    let entry = new todo("new item");
    let entryContainer = document.createElement("p");
    entryContainer.innerText = entry.title;
    todoContainer.appendChild(entryContainer);
  };
};
