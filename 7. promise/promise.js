// const myFirstPromise = new Promise((resolve, reject) => {
//     let process = false;

//     setTimeout(() => {
//         if (process) {
//             resolve("Promise Fulfilled.")
//         } else {
//             reject("Promise Failed")
//         }
//     }, 2000);
// })

// myFirstPromise
//     .then((response) => console.log(response))
//     .catch((error) => console.log(`Error: ${error}`))

const processingOnBuying = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            name: "Medkit",
            buyPrice: 300,
            sellPrice: 100,
            amount: 5
        })
    }, 2000);
})

processingOnBuying
    .then((item) => {
        console.log("First .then");
        console.log(item);
        return item.name; 
    })
    .then((itemName) => {
        console.log("Second .then");
        console.log(itemName);
        
        
    })