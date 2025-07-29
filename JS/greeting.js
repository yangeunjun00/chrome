const loginform = document.querySelector(".login-form ");
const loginInput = loginform.querySelector("input");
const greeting = document.querySelector("#greeting");
const USER = "username";
const hid = "hidden";
function submit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USER, username);
  loginform.classList.add(hid);
  greetingUser(username);
}
function greetingUser(username) {
  greeting.innerText = `바보 ${username}`;
  greeting.classList.remove(hid);
}

const save = localStorage.getItem(USER);
if (save === null) {
  loginform.classList.remove(hid);
  loginform.addEventListener("submit", submit);
} else {
  greetingUser(save);
}
