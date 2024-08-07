const inventory = [
    {
        id: 1,
        name: "Medkit",
        buyPrice: 300,
        sellPrice: 100,
        amount: 5
    },
    {
        id: 2,
        name: "Ammo",
        buyPrice: 250,
        sellPrice: 125,
        amount: 30,
    }
]

//print first item's ID

console.log(inventory[0].id, "First item's ID");


//looping inside array of objects and print the name only
for (const item of inventory) {
    console.log(item.name); //print the name only
}

//adding new item/object
const newItem = {
    id: 3,
    name: "RPD",
    buyPrice: 1500,
    sellPrice: 0,
    amount: 1,
}

inventory.push(newItem);
console.log(inventory);

const newItemWithoudId = {
    name: "AK-47",
    buyPrice: 2000,
    sellPrice: 0,
    amount: 1,
}

console.log("___________________________________________");

//const lastItemInInventory = inventory.at(-1); (last index is -1) or inventory.length(-1)
const lastItemInInventory = inventory.at(-1);

newItemWithoudId.id = lastItemInInventory.id + 1;

inventory.push(newItemWithoudId);

console.log(inventory);

console.log("______________________________");
//find an item

const itemUsed = "Medkit";

//V1
let itemFound;

for (const item of inventory) {
    if (item.name === itemUsed) {
        itemFound = item;
    }
}
console.log(itemFound, "V1");

//V2
const selectedItem = inventory.find(item => item.name === itemUsed);
console.log(selectedItem, "V2");