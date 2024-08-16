/*
  Practice 1: Create a Promise that simulates downloading a file. The Promise should resolve with a success message after a 3-second delay if the download is successful, and reject with an error message if the download fails.
*/

console.log("Practice No. 1");


function downloadData() {
    return new Promise((resolve, reject) => {
        let download = false;
        setTimeout(() => {
            if (download) {
                resolve("Download Complete")
            } else {
                reject("Download Unsuccessful")
            }
        }, 3000);
    })
}

downloadData()
    .then((response) => console.log(response)).catch((error) => console.log(error))

/*    
or can be like this

const DownloadProcess = async () => {
    try {
    
    }


}
*/

console.log("________________________-");
    

/*
  Practice 2: Create a Promise that mimics an API call to fetch user data. The Promise should resolve with a simulated user object "{ name: 'John Doe', age: 30 }" after a 2-second delay. How would you design this Promise, and what would the resolved output contain?
*/
