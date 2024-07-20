// Array.push()

// const people = [ "Agif", "Ihsan", "Ghaniyo", "Nisa", "Adi"];
// console.log(people);

// people[5] = "Abi"; // Old way to add new item in array
// console.log(people);

// // Add new item on the back of the array
// people.push("Yoga");
// console.log(people);

// Array.pop();
// people.pop(); // Removing the last item on inside of the array
// console.log(people);

// Array.unshift
// people.unshift("Kelvin"); // Add new item on the front of the array 
// console.log(people);


// Array.shift
// people.shift(); // Removing the first item on inside of the array
// console.log(people);

// Array.delete
// delete people[1];
// console.log(people);

// String to Array (Looping satu satu)
// Convert string to array
const animal = "Cat, Dog, Bird, Rat, Rabbit";
const arrayOfAnimals = animal.split(",").map(animal => animal.trim());
console.log(arrayOfAnimals);

// use case looping and trim
const planets = "mars, Venus, Earth, Jupiter, Saturn, Frog";
const arrayOfPlanets = planets.split(",");
console.log(arrayOfPlanets);

// Array.join();
// Convert Array intro string
// const joinedArray = people.join(",");
// console.log(joinedArray);

let trimmedPlanets = [];

for (const planet of arrayOfPlanets) {
    console.log(planets);
    const formattedPlanet = planet.trim();
    console.log(formattedPlanet);
}

// Array.slice();
// If only 1 parameter it will start from the first index
const people = ["Agif", "Ihsan", "Ghaniyo", "Nisa", "Adi", "Abi"];
const slicedFromStart = people.slice(1);
console.log(slicedFromStart);

const slicedPeople = people.slice(1, 3);
console.log(slicedPeople, "slicedPeople");

const slicedFromBehind = people.slice(3, 6);
console.log(slicedFromBehind, "slicedFromBehind");

const lastIndex = people.flat(-1);
console.log(lastIndex, "lastIndex");

const anotherLastIndex = people[people.length -1];
console.log(anotherLastIndex);

// Array.splice();
// ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']
people.splice(2, 0, 'Eko'); // Adding Eko to index 2
console.log(people, 'additionalPeople'); // ['Agif', 'Ihsan', 'Eko', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']

people.splice(3, 3, 'Yoga', 'Kelvin'); // Adding Yoga and Kelvin to index 3 then remove 3 items after it
console.log(people); // [ 'Agif', 'Ihsan', 'Eko', 'Yoga', 'Kelvin', 'Abi' ]

people.splice(3, 2); // Slicing Yoga and Kelvin (index 3)
console.log(people); // [ 'Agif', 'Ihsan', 'Eko', 'Abi' ]

// Use Case Looping and Trim
// Complex One
// const planets = 'Mars, Venus, Earth, Jupiter, Saturn, Frog';
// const arrayOfPlanets = planets.split(',')
// console.log(arrayOfPlanets); // [ 'Mars', ' Venus', ' Earth', ' Jupiter', ' Saturn', ' Frog' ]

// let trimmedPlanets = [];


// for (const planet of arrayOfPlanets) {
//   // console.log(planet);
//   const formattedPlanet = planet.trim();
//   // console.log(formattedPlanet);
//   trimmedPlanets.push(formattedPlanet);
//   // console.log(trimmedPlanets);
// }

// console.log(trimmedPlanets); // [ 'Mars', 'Venus', 'Earth', 'Jupiter', 'Saturn', 'Frog' ]