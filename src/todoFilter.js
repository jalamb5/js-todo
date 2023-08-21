export { filterTodos, filterListeners };

function filterTodos(list) {
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
    // find the div containing this todo item.
    let todoDiv = document.getElementById(i);

    if (todoItem.deleted === "deleted") {
      continue;
    } else if (todoItem.list !== list) {
      // hide the item.
      todoDiv.style.display = "none";
    } else {
      todoDiv.style.display = "";
    }
  }
}

function filterListeners() {
  let listLinks = document.querySelectorAll(".list");

  listLinks.forEach((list) => {
    list.onclick = () => {
      filterTodos(list.textContent);
    }
  })
}


function showStuff(id, text, btn) {
  document.getElementById(id).style.display = 'block';
  // hide the lorem ipsum text
  document.getElementById(text).style.display = 'none';
  // hide the link
  btn.style.display = 'none';
}
