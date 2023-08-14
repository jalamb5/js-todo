export default renderTodo;

// Check if content div exists, if not create it.
function establishContainers() {
  let todoContainer = document.getElementById('todo-container');
  let listContainer = document.getElementById('list-container');

  if (!todoContainer) {
    todoContainer = document.createElement('div');
    todoContainer.id = 'todo-container';
  };

  if (!listContainer) {
    listContainer = document.createElement('div');
    listContainer.id = 'list-container';
  };

  return [todoContainer, listContainer];
};

function renderTodo(todoItem) {
  const body = document.querySelector("body");
  const [todoContainer, listContainer] = establishContainers();

  const title = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const list = document.createElement("p");

  title.innerHTML = todoItem.title;
  dueDate.innerHTML = todoItem.dueDate;
  priority.innerHTML = todoItem.priority;
  list.innerHTML = todoItem.list;

  todoContainer.appendChild(title);
  todoContainer.appendChild(dueDate);
  todoContainer.appendChild(priority);
  listContainer.appendChild(list);
  body.appendChild(todoContainer);
  body.appendChild(listContainer);

};
