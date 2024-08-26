import { users } from "../database/weekendDB.js";

const loginForm = document.querySelector("#form");
const username = loginForm.querySelector("#username");
const password = loginForm.querySelector("#password");

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

  window.location.href("weekend-dashboard.html");

  localStorage.setItem("username", userFound.email);
});

// const loginButton = loginForm.querySelector("#button");
