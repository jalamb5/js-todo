import {renderTodo} from "./todoDisplay.js";
import {renderTodoForm, listOptions } from "./todoForm.js";
import css from "../dist/assets/style.css";
import { filterListeners } from "./todoFilter.js";
import { renderModal } from "./modal.js";

renderTodoForm();
renderTodo();
renderModal();
filterListeners();
listOptions();

// For testing purposes only, clear data.
let clearButton = document.createElement("button");
clearButton.textContent = "Clear Data";
document.querySelector("body").appendChild(clearButton);

clearButton.onclick = () => {
  window.localStorage.clear();
  location.reload();
}


