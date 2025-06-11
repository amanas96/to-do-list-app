const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("Add your task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveTask();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "SPAN" || e.target.tagName === "I") {
      const li = e.target.closest("li");
      //   e.target.parentElement.remove();
      if (li) {
        li.remove();
        saveTask();
      }
    }
  },
  false
);
function saveTask() {
  localStorage.setItem("task", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("task");
}
showTask();
function clearAllTasks() {
  listContainer.innerHTML = "";
  localStorage.removeItem("task");
}
