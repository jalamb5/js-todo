import renderTodo from "./todoDisplay.js";
import renderTodoForm from "./todoForm.js";
import css from "../dist/assets/style.css";
import markBox from "./markBox.js";
import { deleteListeners } from "./deleteTodo.js";
import { filterListeners } from "./todoFilter.js";

// window.localStorage.clear();

renderTodoForm();
renderTodo();
deleteListeners();
filterListeners();

let checkBoxes = document.querySelectorAll("input[type='checkbox']");

checkBoxes.forEach((checkbox) => {
  checkbox.onclick = () => {
    markBox(checkbox.previousSibling.textContent)
  }
})

