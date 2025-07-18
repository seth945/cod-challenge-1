function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015; // 1.5% of amount
  const fee = Math.min(Math.max(percentageFee, 10), 70); // Enforce min = 10, max = 70
  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");
}

// Prompt user for input using readline (Node.js)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Unatuma Ngapi? (KES): ", (input) => {
  const amountToSend = Number(input);

  // Validate input and call the function
  if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
  } else {
    console.log("Tafadhali weka kiasi sahihi cha kutuma.");
  }
  readline.close();
});
