export default renderTodo;

function renderTodo(todoItem) {
  const body = document.querySelector("body");
  const todoContainer = document.createElement("div");
  const todoTitle = document.createElement("p");

  todoTitle.innerHTML = todoItem.title;

  todoContainer.appendChild(todoTitle);
  body.appendChild(todoContainer);

};
