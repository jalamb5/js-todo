export default renderTodo;

// Check if content div exists, if not create it.
function establishTodoContainer() {
  let TodoContainer = document.getElementById('todo-container');

  if (!TodoContainer) {
    TodoContainer = document.createElement('div');
    TodoContainer.id = 'todo-container';
  }
  return TodoContainer;
};

function renderTodo(todoItem) {
  const body = document.querySelector("body");
  const todoContainer = establishTodoContainer();

  const title = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");

  title.innerHTML = todoItem.title;
  dueDate.innerHTML = todoItem.dueDate;
  priority.innerHTML = todoItem.priority;

  todoContainer.appendChild(title);
  todoContainer.appendChild(dueDate);
  todoContainer.appendChild(priority);
  body.appendChild(todoContainer);

};
