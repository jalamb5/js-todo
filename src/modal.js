import { listOptions } from "./todoForm";

export { renderModal, modalListeners };

function renderModal() {
  const todosContainer = document.getElementById("todos-container");
  const modal = document.createElement("dialog");
  modal.id = "modal";

  todosContainer.appendChild(modal);
}

// Handle buttons outside modal.
function modalListeners() {
  const modal = document.getElementById("modal");
  const editButtons = document.querySelectorAll(".edit-btn");

  editButtons.forEach((editButton) => {
    editButton.onclick = () => {
      modal.showModal();
      updateModal(editButton.parentElement.id);
    };
  });
}

// Add todo data to modal.
function updateModal(key) {
  const modal = document.getElementById("modal");

  // clear any existing data.
  if (modal.children.length > 0) {
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
  }

  // add a title and close button.
  const headerDiv = document.createElement("div");
  const modalTitle = document.createElement("h3");
  headerDiv.id = "modal-header";
  modalTitle.textContent = "View / Edit To-do";

  const closeModal = document.createElement("button");
  closeModal.innerHTML = "&times";
  closeModal.id = "closeModal";

  headerDiv.append(modalTitle, closeModal);
  modal.appendChild(headerDiv);

  // Add listener to close button.
  closeModal.onclick = () => {
    modal.close();
  };

  // Pull todo info and prefill form with data.
  const todoItem = JSON.parse(window.localStorage.getItem(key));
  const todoData = document.createElement("form");

  todoData.addEventListener("submit", (_event) => {
    todoItem.title = todoData.elements.title.value;
    todoItem.dueDate = todoData.elements.dueDate.value;
    todoItem.priority = todoData.elements.priority.value;
    todoItem.notes = todoData.elements.notes.value;
    todoItem.list = todoData.elements.list.value;

    window.localStorage.setItem(key, JSON.stringify(todoItem));
  });

  todoData.innerHTML = `
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" value="${todoItem.title}" required><br>

      <label for="due-date">Due Date:</label>
      <input type="date" id="due-date" name="dueDate" value=${todoItem.dueDate}><br>

      <label for="priority">Priority:</label>
      <input list="modal-priority-selections" name="priority" value=${todoItem.priority}>
      <datalist id="modal-priority-selections">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
      </datalist><br>

      <label for="notes">Notes:</label>
      <textarea id="notes" name="notes">${todoItem.notes}</textarea><br>

      <label for="list">List:</label>
      <input list="modal-list-selections" id="list" name="list" value=${todoItem.list}>
      <datalist id="modal-list-selections"></datalist><br>

      <input type="submit" value="Edit Todo" id="submit" class="button">
    `;

  modal.appendChild(todoData);
  listOptions("edit");
}
