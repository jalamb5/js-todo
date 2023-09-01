export { filterListeners };

function filterTodos(filter) {
  // Reveal 'Show All' button.
  const showAll = document.getElementById("showAll");
  showAll.style.display = "";

  // Filter todos by list.
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
    // Null checking
    if (todoItem === null) {
      continue;
    }

    // find the div containing this todo item.
    let todoDiv = document.getElementById(i);

    // ignore deleted todo items.
    if (todoItem.deleted === "deleted") {
      continue;
      // if 'show all' is clicked, remove any hidden attributes and move to next.
    } else if (filter === "Show All") {
      todoDiv.style.display = "";
      // rehide show all button.
      showAll.style.display = "none";
      continue;
      // hide completed items
    } else if (filter === "Hide Completed") {
      if (todoItem.completed === true) {
        todoDiv.style.display = "none";
      }
      // hide the item if list doesn't match.
    } else if (todoItem.list !== filter) {
      todoDiv.style.display = "none";
      // show item if list matches.
    } else {
      todoDiv.style.display = "";
    }
  }
}

function filterListeners() {
  // Listen for list filters.
  let listLinks = document.querySelectorAll(".list");

  listLinks.forEach((list) => {
    list.onclick = () => {
      filterTodos(list.textContent);
    };
  });

  // Listen for completed filters.
  let completedButton = document.getElementById("hideCompleted");
  completedButton.onclick = () => {
    filterTodos(completedButton.textContent);
  };
}
