// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const accountNames = [];
  for (let element of array) {
    for (let i = 0; i < element.name.length; i++) {
      if (
        element.name[i] === letter.toUpperCase() ||
        element.name[i] === letter.toLowerCase()
      )
        accountNames.push(element.name);
    }
  }
  return accountNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
