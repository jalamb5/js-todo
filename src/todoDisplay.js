import deleteTodo from "./deleteTodo";

export default renderTodo;

// Check if content divs exists, if not create them.
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
  }

  return [todosContainer, listContainer];
}

function renderTodo(i = 0) {
  const body = document.querySelector("body");
  const sidebarContainer = document.getElementById("sidebar");
  const [todosContainer, listContainer] = establishContainers();

  for (i; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));

    if (todoItem.deleted === "deleted") { continue };

    let newTodo = document.createElement("div");
    newTodo.classList.add("todo-item");

    // Attach the todo item's key as a hidden attribute for lookups.
    const key = document.createElement("p");
    key.setAttribute("hidden", "hidden");
    key.textContent = i.toString();

    // Create checkbox and ensure it is marked if the todo is completed.
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    if (todoItem.completed) { checkBox.checked = true; };

    // Add todo info to page.
    const title = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");

    title.textContent = todoItem.title;
    dueDate.textContent = todoItem.dueDate;
    priority.textContent = todoItem.priority;

    // Create delete button.
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");

    newTodo.append(key, checkBox, title, dueDate, priority, deleteButton);
    todosContainer.appendChild(newTodo);
  }
  body.appendChild(todosContainer);
  renderLists(listContainer, sidebarContainer);
}

function renderLists(listContainer, sidebarContainer) {
  // Remove children from the list container if they exist.
  if (listContainer.children.length > 0) {
    while (listContainer.firstChild) {
      listContainer.removeChild(listContainer.firstChild);
    }
  }

  // Set title.
  let listTitle = document.createElement("h2");
  listTitle.textContent = "Lists";
  listContainer.appendChild(listTitle);

  // Collect lists from all todo items in local storage.
  let lists = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
    lists.push(todoItem.list);
  }

  // Remove duplicates.
  let cleanedLists = [...new Set(lists)];

  // Add cleaned up lists to page.
  cleanedLists.forEach((list) => {
    const listElement = document.createElement("p");
    listElement.textContent = list;
    listContainer.appendChild(listElement);
  });
  sidebarContainer.appendChild(listContainer);
}
