/* 1
create a new object named "person" then fill the properties with:
- firstName
- lastName
- address
    - country
    - city
- age
and then print the whole object
*/

const person = {
    firstName: "Franklin",
    lastName: "Clinton",
    address: {
        country: "USA",
        city: "Los Santos",
        },
    age: 35,
}

console.log(person);

/* 2
Reassign the country and city into another value, then print the object.
*/

person.address.country = "Bekasi",
person.address.city = "Ujung Kulon",
console.log(person);

/* 3
create a new object from empty object "{}", then start adding some properties
*/

const carSpec = {};
carSpec.brand = "Lancia";
carSpec.product = "Delta";
carSpec.year = 1990;
console.log(carSpec);

/* 4
Print each value by using forIn
*/

for (const key in carSpec) {
    if (Object.hasOwnProperty.call(carSpec, key)) {
        const value = carSpec[key];
        console.log(value);
    }       
}

/* 5
Print the whole value in one string
*/
const x = person;

console.log(`Hi, my name is ${person.firstName} ${person.lastName}. I live in ${person.address}, I am ${person.age} years old`)