
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;      // Fixed starting fare in KES
  const chargePerKm = 15;   // Fare per kilometer in KES

  
  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  
  console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question("Unafika wapi Mkubwa? Kilometer ngapi? ", function (input) {
  const distanceInKm = Number(input); // Convert input to number

  
  if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm); // Call the function
  } else {
    console.log("Tafadhali andika nambari sahihi ya kilomita (greater than 0).");
  }

  readline.close(); // Close the input
});
