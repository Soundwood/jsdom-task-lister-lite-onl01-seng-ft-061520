document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.getElementById("create-task-form")
let list = document.getElementById("tasks")

form.addEventListener('submit', function(event) {
  event.preventDefault()
  let text = document.getElementById("new-task-description")
  let element = document.createElement('li')
  element.innerText = text.value
  list.appendChild(element)
  event.target.reset()
})