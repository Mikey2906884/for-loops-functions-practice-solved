// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const accountNames = [];
  for (let element of array) {
    if (element.deposits && element.withdrawals) {
      let sumDeposits = 0;
      for (let amount of element.deposits) {
        sumDeposits += amount;
      }
      let sumWithdrawals = 0;
      for (let amount of element.withdrawals) {
        sumWithdrawals += amount;
      }

      if (sumDeposits - sumWithdrawals != element.balance)
        accountNames.push(element);
    }
  }
  return accountNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
