const name = "Franklin Clinton";
const bornYear = "1988";
let hobby = "Cuci Motor";
let address = "Los Santos";

// console.log(name);
// console.log(bornYear);
// console.log(hobby);
// console.log(address);

const currentYear = new Date().getFullYear();
const age = currentYear - bornYear;

const concat = "Hei, my name is " + name + ". I'm " + age + " years old. I like to " + hobby + ". I live in " + address;
console.log(concat);

const backtickConcat = `Hei, my name is ${name}. I'm ${age} years old. I like to ${hobby}. I live in ${address}`;
console.log(backtickConcat);