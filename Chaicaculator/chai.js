
function calculateChaiIngredients(numberOfCups) {

  let water = 200; // in ml
  let milk = 50;   // in ml
  let tea = 1;     // in tablespoons
  let sugar = 2;   // in teaspoons

  
  let totalWater = water * numberOfCups;
  let totalMilk = milk * numberOfCups;
  let totalTea = tea * numberOfCups;
  let totalSugar = sugar * numberOfCups;

  
  console.log("To make " + numberOfCups + " cup(s) of Kenyan Chai, you will need:");
  console.log("Water: " + totalWater + " ml");
  console.log("Milk: " + totalMilk + " ml");
  console.log("Tea Leaves (Majani): " + totalTea + " tablespoon(s)");
  console.log("Sugar (Sukari): " + totalSugar + " teaspoon(s)");
  console.log("Enjoy your Chai Bora!");
}


let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");


let cups = Number(input);


if (cups > 0) {
  calculateChaiIngredients(cups);
} else {
  console.log("Please enter a number greater than 0.");
}
