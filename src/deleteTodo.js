export default deleteTodo;
import renderTodo from "./todoDisplay";

function deleteTodo(key) {
  window.localStorage.setItem(key, '{"deleted":"deleted"}');

  let todosContainer = document.getElementById("todos-container");

  // Remove children from the container if they exist.
  if (todosContainer.children.length > 0) {
    while (todosContainer.firstChild) {
      todosContainer.removeChild(todosContainer.firstChild);
    }
  }
  renderTodo();
}
