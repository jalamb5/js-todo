export default markBox;

function markBox(key) {
  let todoItem = JSON.parse(window.localStorage.getItem(key));

  if (todoItem.completed) {
    todoItem.completed = false;
  } else if (!todoItem.completed) {
    todoItem.completed = true;
  }
  window.localStorage.setItem(key, JSON.stringify(todoItem));
}
