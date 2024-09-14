import { users } from "./database/dummy.js";

const loginForm = document.querySelector("#login-email");
const username = loginForm.querySelector("#login-email");
const password = loginForm.querySelector("#login-password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInputValue = username.value;
  const passwordInputValue = password.value;

  const userFound = users.find((user) => user.email === emailInputValue);

  if (!userFound) {
    console.log("Fault in Email Input");
    alert("Email or Password is Incorrect");
    return;
  }

  if (userFound.password !== passwordInputValue) {
    console.log("Fault in Password Input");
    alert("Email or Password is Incorrect");
    return;
  }

  alert("You're Logged In");

//   window.location.href("weekend-dashboard.html");

//   localStorage.setItem("username", userFound.email);
});