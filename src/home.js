import renderTodo from "./todoDisplay.js";
import renderTodoForm from "./todoForm.js";
import css from "../dist/assets/style.css";
import checkboxListeners from "./checkBox.js";
import { deleteListeners } from "./deleteTodo.js";
import { filterListeners } from "./todoFilter.js";
import { renderModal, modalListeners } from "./modal.js";

// window.localStorage.clear();

renderTodoForm();
renderTodo();
renderModal();
checkboxListeners();
modalListeners();
deleteListeners();
filterListeners();
