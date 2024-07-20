const a = 5;
const b = 7;

// Strict Comparison
// check value and data types
if (a === b) {
console.log("A is equal to B");
} else {
    console.log("A is not equal to B");
}

// Casual Comparison
// Check value only
if (4 === 4) {
    console.log("A is equal to B");
} else {
    console.log("A is not equal to B");
}


if (5 > 5) {
    console.log("A is greater than B");
} else {
    console.log("A is less than B");
}


if (5 >= 5) {
    console.log("A is greater or equal to B");
} else {
    console.log("A is less than or equal to B");
}



// Nested if else
const  email = "johndoe@mail.com";
const password = "john123";

const emailInput = "johndoe@mail.com";
const passwordInput = "john123";

// Nested If
if (email === emailInput) {
    if (password === passwordInput) {
      console.log('Login Successful');
    } else {
      console.log('Password is invalid');
    }
  } else { // Fallback
    console.log('Email is invalid');
  }

// If Else operator

// AND Operator
if (email === emailInput && password === passwordInput) {
    console.log("Login Successful");
} else {
    console.log("Email or Password is invalid");
}

// OR Operator
if (1 === 1 || 1 === 2 || 1 === 4 || 1 === 5 || 1 === 1) {
    console.log(true);
} else {
    console.log(false);
}

