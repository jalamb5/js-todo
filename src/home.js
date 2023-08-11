import renderTodo from "./todoDisplay.js";
import renderTodoForm from "./todoForm.js";

renderTodoForm();
renderTodo();

// document.getElementById('todo-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const title = document.getElementById('title').value;
//   const dueDate = document.getElementById('due-date').value;
//   const priority = document.getElementById('priority').value;
//   const notes = document.getElementById('notes').value;
//   const list = document.getElementById('list').value;

//   const newTodo = new Todo(title, dueDate, priority, notes, list);
//   console.log(newTodo); // You can replace this with your actual logic

//   // Reset the form after submission
//   document.getElementById('todo-form').reset();
// });
