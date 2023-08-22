export { renderModal, modalListeners }

function renderModal() {
  const todosContainer = document.getElementById("todos-container");
  const modal = document.createElement('dialog');
  modal.id = "modal";

  todosContainer.appendChild(modal);
}

// Handle buttons outside modal.
function modalListeners() {
  const modal = document.getElementById("modal");
  let editButtons = document.querySelectorAll(".edit-btn");

  editButtons.forEach((editButton) => {
    editButton.onclick = () => {
      modal.showModal();
      updateModal(editButton.parentElement.id);
    }
  })
}

// Add todo data to modal.
function updateModal(key) {
  let todoItem = JSON.parse(window.localStorage.getItem(key));
  const todoData = document.createElement("p");
  const modal = document.getElementById("modal");

  todoData.textContent = todoItem;
  modal.appendChild(todoData);
}

