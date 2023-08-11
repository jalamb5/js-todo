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

  const todoTitle = document.createElement("p");

  todoTitle.innerHTML = todoItem.title;

  todoContainer.appendChild(todoTitle);
  body.appendChild(todoContainer);

};
