// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  const accountNames = [];
  let counter = 0;
  for (let element of array) {
    if (element.balance > counter) {
      counter = element.balance;
      break;
    }
  }
  for (let element of array) {
    if (element.balance > 0 && element.balance > counter) {
      counter = element.balance;
    }
  }
  for (let element of array) {
    if (element.balance === counter && counter > 0) accountNames.push(element);
  }

  return accountNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
