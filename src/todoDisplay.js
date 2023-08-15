export default renderTodo;

// Check if content div exists, if not create it.
function establishContainers() {
  let todosContainer = document.getElementById("todos-container");
  let listContainer = document.getElementById("list-container");
  let newTodo = document.createElement("div");
  newTodo.classList.add("todo-item");

  if (!todosContainer) {
    todosContainer = document.createElement("div");
    todosContainer.id = "todos-container";
  }

  if (!listContainer) {
    listContainer = document.createElement("div");
    listContainer.id = "list-container";
  }

  return [todosContainer, listContainer, newTodo];
}

function renderTodo(todoItem) {
  const body = document.querySelector("body");
  const [todosContainer, listContainer, newTodo] = establishContainers();

  const title = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const list = document.createElement("p");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  title.innerHTML = todoItem.title;
  dueDate.innerHTML = todoItem.dueDate;
  priority.innerHTML = todoItem.priority;
  list.innerHTML = todoItem.list;

  newTodo.appendChild(checkBox);
  newTodo.appendChild(title);
  newTodo.appendChild(dueDate);
  newTodo.appendChild(priority);
  listContainer.appendChild(list);
  todosContainer.appendChild(newTodo);
  body.appendChild(todosContainer);
  body.appendChild(listContainer);
}
