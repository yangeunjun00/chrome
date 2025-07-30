const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const todo_key = "todos";
let toDos = [];
function savetoDos() {
  localStorage.setItem(todo_key, JSON.stringify(toDos));
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  savetoDos();
}
function paintTodo(newtodo) {
  const li = document.createElement("li");
  li.id = newtodo.id;
  const span = document.createElement("span");
  span.innerText = newtodo.text;
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
  const newtodoObj = {
    text: newtodo,
    id: Date.now(),
  };
  toDos.push(newtodoObj);
  todoInput.value = "";
  paintTodo(newtodoObj);
  savetoDos();
}
function hello(Item) {
  console.log("hello" + Item);
}
todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(todo_key);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
