const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const todo_key = "todos";
const toDos = [];
function savetoDos() {
  localStorage.setItem(todo_key, JSON.stringify(toDos));
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paintTodo(newtodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newtodo;
  const button = document.createElement("button");
  button.innerText = "🐽";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}
function handleSubmit(event) {
  event.preventDefault();
  const newtodo = todoInput.value;
  toDos.push(newtodo);
  todoInput.value = "";
  paintTodo(newtodo);
  savetoDos();
}
function hello(Item) {
  console.log("hello" + Item);
}
todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(todo_key);
console.log(savedTodos);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  console.log(parsedTodos);
  parsedTodos.forEach(paintTodo);
}
