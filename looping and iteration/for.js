const sports = ["Football", "Basket", "Swimming", "Marathon", "Fishing"];
console.log(sports.length, "length");

for (let i = 0; i < sports.length; i++) {
    console.log(i);
}

for (let i = 0; i < sports.length; i++) {
    const sport = sports[i];
    console.log(sport)
}

/*
common mistakes;
- "sports.length" is not substracted by 1
- "i > 0 and not i>= 0"
- "i-- and not i++"
*/



for (let i = sports.length - 1; i > 0; i--) {
    const sport = sports[i];
    console.log(i);
    console.log(sport)
}

// let str = "";
// for (i = 0; i < 9; i++) {
//     str = str + i;
// }

// console.log(str);
//expected output = "012345678"