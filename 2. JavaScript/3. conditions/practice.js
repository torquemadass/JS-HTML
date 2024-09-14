const pet = "Kucing";

/*
create switch case statement by using "Pet" as the key, then create 3 cases and the fallback (default)
*/

switch (pet) {
    case "Kucing":
        console.log("Ini ya kucing");
        break;

    case "Ihsan":
    case "Walikota":
        console.log("Kalo ini calon walikota tangsel 2029");
        break;

    case "Tikus":
        console.log("Ini ya tikus");
        break;

    default:
        console.log("What the dog doin");
        break;
}
