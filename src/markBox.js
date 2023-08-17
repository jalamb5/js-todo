function markBox(key) {
  let todoItem = window.localStorage.getItem(key);

  if (todoItem.completed) {
    todoItem.completed = false;
  } else if (!todoItem.completed) {
    todoItem.completed = true;
  }
}
