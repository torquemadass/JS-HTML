const favoriteFruits = ['apple', 'orange', 'watermelon', 'grape'];
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig' ,'grape', 'honeydew', 'kiwi'];

// cari buah yang sama di kedua array
/* expected output :
apple
grape
*/

let arrayFound = 0;
for (let i = 0; i < favoriteFruits.length; i++) {
    for (let j = 0; j < fruits.length; j++) {
        if (favoriteFruits[i] === fruits[j]) {
            arrayFound = 1;
            console.log(favoriteFruits[i], " basic for");
        }
    }
}

for (const fruits in favoriteFruits)

for (const fruit of fruits) {
    console.log(fruit);
    for (const favFruit of favoriteFruits) {
        if (fruit === favFruit) {
            console.log(favFruit, "for of");
        }
    }
}