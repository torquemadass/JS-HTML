const myFirstPromise = new Promise((resolve, reject) => {
    let process = true;

    setTimeout(() => {
        if (process) {
            resolve("Promise Fulfilled.")
        } else {
            reject("Promise Failed")
        }
    }, 2000);
})

async function myFirstPromiseFunction() {
    try {
        const response = await myFirstPromise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

myFirstPromiseFunction();