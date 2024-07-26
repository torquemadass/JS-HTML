/*
Quiz 1: Total Price

Get the total price by using looping/iteration.
Finish the objective by using all 3 different loopings:
- For
- For of
- For in
*/

const groceries = [15000, 30000, 50000, 100000, 500000]
let sum = 0;
for (let i = 0; i < groceries.length; i++) {
    sum += groceries[i];
}
console.log(sum, "basic for");

let total = 0;
for (let grocery of groceries) {
  total += grocery;
}
console.log(total, "forOf");

let price = 0;
for (let index in groceries) {
    price += groceries[index];    
}
console.log(price, "forIn");


/*
Quiz 2: Looping + Condition

Find the correct key to open the Golden Door by using looping and condition (if-else);
- If the key has been found, print: "You have opened the door".
- If the key is not found, print: "You don't have the right key"
*/

const requiredKey = 'Golden Key'; // 'White Key'
const keys = ['Red Key', 'Blue Key', 'Green Key', 'Golden Key', 'Yellow Key', 'Black Key'];

let keyFound = false; //Flagging

for (let i = 0; i < keys.length; i++) {
    const key = keys[1];
   
    if (key === requiredKey) {
      console.log("You have opened the door");
      keyFound = true;
    } 

}

if (!keyFound) { // ! = empty values, nulll, undefined, 0 = false
  console.log("You don't have the right key");
}