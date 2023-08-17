import renderTodo from "./todoDisplay.js";
import renderTodoForm from "./todoForm.js";
import css from "../dist/assets/style.css";
import markBox from "./markBox.js";
import deleteTodo from "./deleteTodo.js";

renderTodoForm();
renderTodo();

let checkBoxes = document.querySelectorAll("input[type='checkbox']");
let deleteButtons = document.querySelectorAll(".delete-btn");

checkBoxes.forEach((checkbox) => {
  checkbox.onclick = () => {
    markBox(checkbox.previousSibling.textContent)
  }
})

deleteButtons.forEach((deleteButton) => {
  deleteButton.onclick = () => {
    deleteTodo(deleteButton.parentElement.firstChild.textContent);
  }
})
