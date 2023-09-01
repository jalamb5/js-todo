export default checkboxListeners;

function markBox(todoDiv) {
  const key = todoDiv.id;
  const todoItem = JSON.parse(window.localStorage.getItem(key));

  if (todoItem.completed) {
    todoItem.completed = false;
    todoDiv.classList.remove("todo-complete");
  } else if (!todoItem.completed) {
    todoItem.completed = true;
    todoDiv.classList.add("todo-complete");
  }
  window.localStorage.setItem(key, JSON.stringify(todoItem));
}

function checkboxListeners() {
  const checkBoxes = document.querySelectorAll("input[type='checkbox']");

  checkBoxes.forEach((checkbox) => {
    checkbox.onclick = () => {
      markBox(checkbox.parentElement);
    };
  });
}
