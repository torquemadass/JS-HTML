/*
Quiz 1:

Use Case:
Compare every fruit prices 1 by 1 and find the cheapest fruit (Use Nested If-Else)
*/

const applePrice = 10000;
const grapePrice = 15000;
const melonPrice = 20000;
const strawberryPrice = 25000;
const avocadoPrice = 30000;

let cheapestFruit = 'Apple';
let cheapestPrice = applePrice;

if (grapePrice < cheapestPrice) {
  if (melonPrice > grapePrice) {
    if (strawberryPrice > melonPrice) {
      if (avocadoPrice > strawberryPrice) {
    }
    }
  }
}

console.log(`The cheapest fruit is ${cheapestFruit} with a price of ${cheapestPrice}`);

/*
Quiz 2:

Use Case:
Compare the currentDay with targetDay by using ternary. If the condition is
- fulfilled then print 'It's a weekend'
- not fulfilled then print 'It's a weekday'
*/

const targetDay = 'Saturday';
const currentDay = 'Friday';

const result = (currentDay === targetDay) ? "It's a weekend" : "It's a weekday";
console.log(result);

/*
Quiz 3: The Treasure Hunt (Using "AND")
Story:

You are an adventurous explorer on a quest to find a hidden treasure in an ancient temple. The treasure is located behind a secret door that only opens when two specific conditions are met.

Scenario:

You have a map (hasMap) that shows the location of the secret door.
You have a special key (hasKey) that can unlock the door.
Task:

Write a JavaScript if statement using the "AND" logical operator to check if both conditions are met (you have the map and the key) before the secret door can be opened.

Variables to start:
*/

let hasMap = true;
let hasKey = true;

if (hasMap && hasKey) {
    console.log("The secret door opens, finaly we can find the hidden treasure!");
  } else {
    console.log("The secret door remains closed. You need both the map and the key.");
  }

/*
Quiz 4: The Space Mission (Using "OR")
Story:

You are the captain of a spaceship on a mission to explore a distant planet. Your spaceship has two critical systems that must be operational for a successful landing.

Scenario:

The navigation system (navSystem) needs to be functioning.
The communication system (commSystem) needs to be functioning.
Task:

Write a JavaScript if statement using the "OR" logical operator to check if at least one of these systems is operational before attempting to land on the planet.

Variables to start:
*/

let navSystem = false;
let commSystem = true;

if (navSystem || commSystem) {
    console.log("We can attempt to land on the planet. At least one critical system is operational.");
  } else {
    console.log("Both critical systems are down. You cannot attempt to land on this planet.");
  }