const food = "Orange Juice";

switch (food) {
    case "Rendang":
        console.log("This is your rendang");   
        break;

    case "Nasi Goreng":
        console.log("This is your nasi goreng");
        break;

    case "Orange Juice":
    case "Apple Juice":
        console.log("This is your beverage");
        break;

    default:
        console.log("Your request is not available");
        break;
}

switch (true) {
    case 2 > 1:
        console.log("That is true");
        break;

    case 1 > 2:
        console.log("That is true");
        break;

    default:
        console.log("Nothing is true");
        break;
}