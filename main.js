// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.


//APPROACH
// chickNum = chick * 2
// cowsNum = cows * 4
// pigsNum = pigs * 4
//legsSum = chickNum + cowsNum + pigsNum

function animalsLegs( chick, cows, pigs) {
    let chickNum = chick * 2
    let cowsNum = cows * 4
    let pigsNum = pigs * 4
    let legsSum = chickNum + cowsNum + pigsNum;

    return legsSum;
}

console.log(animalsLegs(2, 3, 5));
console.log(animalsLegs(1, 2, 3));
console.log(animalsLegs(5, 2, 8));