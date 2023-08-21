export { filterTodos, filterListeners };

function filterTodos(list) {
  console.log(list);
}

function filterListeners() {
  let listLinks = document.querySelectorAll(".list");

  listLinks.forEach((list) => {
    list.onclick = () => {
      filterTodos(list.textContent);
    }
  })
}
