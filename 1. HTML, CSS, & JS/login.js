import { users } from './database/dummy.js';

const loginForm = document.querySelector('#login-form');
const emailInput = loginForm.querySelector('#login-email');
const passwordInput = loginForm.querySelector('#login-password');

//V1

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailInputValue = emailInput.value;
  const passwordInputValue = passwordInput.value;

  const userFound = users.find((user) => user.email === emailInputValue);

  if (!userFound) {
    alert('Email or Password is invalid');
    return
  }

  if (userFound.password !== passwordInputValue) {
    alert('Email or Password is invalid');
    return
  }

  localStorage.setItem('email', userFound.email);
  window.location.href = './ecommerce/index.html';
})


// V2
// loginForm.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     const emailInputValue = emailInput.value;
//     const passwordInputValue = passwordInput.value;

//     const userFound = users.find((user) => user.email === emailInputValue);

//     if (userFound) {
//         if (userFound.password === passwordInputValue) { // or ..(userFound && userFound.password === passwordInputValue)
//             alert("Login Success");
//         } else {
//             alert("Email or Password is Incorret")
//         }
//     } else {
//         alert("Email or Password is Incorrect");
//     }
// })