export { createModal, modalListener }

function createModal() {
  const todosContainer = document.getElementById("todos-container");
  const modal = document.createElement('dialog');

  todosContainer.appendChild(modal);
}

// Handle buttons outside modal.
function modalListener() {
  // add event listeners to view/edit buttons
}

