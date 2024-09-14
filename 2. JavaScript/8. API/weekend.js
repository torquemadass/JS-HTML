/*
  Quiz 1

  Requirements:
    - Create a function named `simplePromise` that returns a new promise.
    - Inside the promise, use `setTimeout` to simulate an asynchronous operation (like a delay of 2 seconds).
    - Resolve the promise with the message: "Promise resolved!" after the delay.

  Bonus:
    - Add an error condition using `Math.random()` to reject the promise with the message: "Promise rejected!" if the number is less than 0.5.
    - Use `.then()` and `.catch()` to handle the resolved and rejected cases.
*/

console.log("Quiz No. 1");

function simplePromise() {
    return new Promise((resolve, reject) => {
        let random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                resolve("Promise Complete")
            } else {
                reject("Promise Rejected")
            }
        }, 2000);
    })
}

simplePromise().then((response) => console.log(response)).catch((error) => console.log(`Error: ${error}`))


console.log("________________________");


/*
  Quiz 2

  Requirements:
    - Create a function named `paramPromise` that returns a new promise.
    - The function will receive a parameter called `message`.
    - Inside the promise, use `setTimeout` to delay for 1 second, then resolve the promise with the `message`.

  Bonus:
    - If the `message` parameter is empty or not provided, reject the promise with the message: "No message provided!".
    - Implement `.finally()` to display a message "Operation complete" whether the promise is resolved or rejected.
*/

console.log(" Quiz No. 2");

// Correct Version
function paramPromise(message) {
  return new Promise((resolve, reject) => {
    if (message) {
      resolve (message);
    } else {
      reject ("No message provided!");
    }
  })
}

paramPromise("Gutenmorgen").then((response) => console.log(response)).catch((error) => console.log(`Error: ${error}`).finally(() => console.log("Operation complete")
))

// const paramPromise = new Promise((resolve, reject) => { (this is fault answer)
//     let result = "message";

//     setTimeout(() => {
//         if(result) {
//             resolve(result)
//         } else {
//             reject("No Message Provided")
//         }
//     }, 1000);
// })

// paramPromise
//     .then((response) => console.log(response))
//     .catch((error) => console.log(`Error: ${error}`))
//     .finally(() => console.log("Operation complete"))

console.log("________________________");


/*
  Quiz 3

  Requirements:
    - Fetch any API you can use then print the data using `.then()`.
    - Handle the error by using `throw` and use `catch` to receive the error message.

  Bonus:
    - Manipulate the data you get from the API before printing it.
    - Using other API than the pokemon we used is much better.
*/

console.log("Quiz No. 3");

const idOrName = "products"
const url =`https://fakestoreapi.com/${idOrName}`;

fetch (url)
  .then((response) => {
    if (response.ok) {
    return response.json();
    } else {
      throw `${response.status}: ${response.statusText}`;
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

console.log("_______________________");


/*
  Quiz 4

  Requirements:
    - Fetch any API you can use then print the data using `Async` / `Await`.
    - Handle the error by using `throw` and use `catch` to receive the error message.

  Bonus:
    - Manipulate the data you get from the API before printing it.
    - Using other API than the pokemon we used is much better.
*/

console.log("Quiz No. 4");

async function getProductData(nameOrId) {
  try {
    const url =`https://fakestoreapi.com/products/${nameOrId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw `${response.status}: ${response.statusText}`;
    }

    const product = await response.json();

    const productData = product.sort((a, b) => a.id - b.id);
    console.log(productData);
    
  } catch (error) {
    console.log(error);
    
  }
}

getProductData("categories");

console.log("_______________________");
