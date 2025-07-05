function BankAccount(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`\n\tDEPOSIT: ${amount}$ | New balance for account #${this.accountNumber}: ${this.balance}$`);
        } else {
            console.error("Deposit amount must be positive.");
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`\tWITHDRAW: ${amount}$ | New balance for account #${this.accountNumber}: ${this.balance}$`);
        } else {
            console.error(`\tWITHDRAW FAILED: Insufficient funds or invalid amount for account #${this.accountNumber}.`);
        }
    };

    this.getBalance = function() {
        console.log(`\tBALANCE: Current balance for account #${this.accountNumber} is ${this.balance}$\n`);
    };
}


function Bank(bankName) {
    this.bankName = bankName;
    this.accounts = [];

    this.addAccount = function(account) {
        if (account instanceof BankAccount) {
            this.accounts.push(account);
            console.log(`${this.bankName}: Account #${account.accountNumber} (${account.accountHolder}) was added.`);
        } else {
            console.error("Error: Only objects of type BankAccount can be added.");
        }
    };

    this.findAccount = function(accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    };

    this.getTotalBalance = function() {
        return this.accounts.reduce((total, account) => total + account.balance, 0);
    };
}

const myBank = new Bank("My International Bank");
console.log(`Bank "${myBank.bankName}" has been created.\n`);

const account1 = new BankAccount("Aram Asatryan", 1001, 75000);
const account2 = new BankAccount("Ani Poghosyan", 1002, 120000);

myBank.addAccount(account1);
myBank.addAccount(account2);
console.log("\n----------------------------------------\n");

console.log(">>> Performing operations with accounts...");
account1.withdraw(5000);
account2.deposit(30000);
account1.getBalance();
account2.getBalance();

console.log(">>> Checking bank data...");
const foundAccount = myBank.findAccount(1001);
console.log(`\tFound account: ${foundAccount.accountHolder}`);
console.log(`\tThe total capital of ${myBank.bankName} is: ${myBank.getTotalBalance()}$`);