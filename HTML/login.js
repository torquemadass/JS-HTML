const users = [
    {
      "email": "john.doe@example.com",
      "password": "SecurePass!2023"
    },
    {
      "email": "jane.smith@example.com",
      "password": "MyPassword@2024"
    },
    {
      "email": "michael.brown@example.com",
      "password": "Brownie#789"
    }
  ]

const loginForm = document.querySelector("#login-form");
const emailInput = loginForm.querySelector("#login-email");
const passwordInput = loginForm.querySelector("#login-password");

loginForm.addEventListener("submit", () => {
     
})

const submitButton = loginForm.querySelector(".login-submit-button");

// V1 (Best Practice)
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const emailInputValue = emailInput.value;
    const passwordInputValue = passwordInput.value;

    const userFound = users.find((user) => user.email === emailInputValue);

    if (!userFound) {
        console.log("Fault in Email Input");
        alert("Email or Password is Incorrect");
    }

    if (userFound.password !== passwordInputValue) {
        console.log("Fault in Password Input");
        alert("Email or Password is Incorrect");
    }

    window.location.replace("dashboard.html");
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