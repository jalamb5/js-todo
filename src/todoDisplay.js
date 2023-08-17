export default renderTodo;

// Check if content div exists, if not create it.
function establishContainers() {
  let todosContainer = document.getElementById("todos-container");
  let listContainer = document.getElementById("list-container");

  if (!todosContainer) {
    todosContainer = document.createElement("div");
    todosContainer.id = "todos-container";
  }

  if (!listContainer) {
    listContainer = document.createElement("div");
    listContainer.id = "list-container";
    let listTitle = document.createElement("h2");
    listTitle.textContent = "Lists";
    listContainer.appendChild(listTitle);
  }

  return [todosContainer, listContainer];
}

function renderTodo(i = 0) {
  const body = document.querySelector("body");
  const sidebarContainer = document.getElementById("sidebar");
  const [todosContainer, listContainer] = establishContainers();

  for (i; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));

    let newTodo = document.createElement("div");
    newTodo.classList.add("todo-item");

    const title = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    const list = document.createElement("p");
    const key = document.createElement("p");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    key.setAttribute("hidden", "hidden");
    key.textContent = i.toString();

    title.innerHTML = todoItem.title;
    dueDate.innerHTML = todoItem.dueDate;
    priority.innerHTML = todoItem.priority;

    list.innerHTML = todoItem.list;

    newTodo.appendChild(key);
    newTodo.appendChild(checkBox);
    newTodo.appendChild(title);
    newTodo.appendChild(dueDate);
    newTodo.appendChild(priority);
    listContainer.appendChild(list);
    todosContainer.appendChild(newTodo);
    console.log(todosContainer);

  }
  body.appendChild(todosContainer);
  sidebarContainer.appendChild(listContainer);
}
