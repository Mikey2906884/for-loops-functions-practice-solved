// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
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
    if (element.balance > 0 && element.balance < counter) {
      counter = element.balance;
    }
  }
  for (let element of array) {
    if (element.balance === counter && counter > 0) accountNames.push(element);
  }

  return accountNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
