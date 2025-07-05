function createAccount(accountHolder, accountNumber, balance = 0){
    return {
        accountHolder : accountHolder,
        accountNumber : accountNumber,
        balance : balance,

        deposit (amount){
                if (amount > 0) {
                    let inital_balance = this.balance;
                    this.balance += amount;
                    console.log(`That's your amount for display --> ${amount}$`);
                    console.log(`That's your inital balance  --> ${inital_balance}$, and that's your balance after deposit -->${this.balance}$\n`);
                }
        },

        withdraw(amount) {
            if (amount > 0 && amount <= this.balance){
                let inital_balance = this.balance;
                this.balance -= amount;
                console.log(`That's your amount for withdraw --> ${amount}`);
                console.log(`That's your inital balance --> ${inital_balance}$, and that's your balance after witdraw --> ${this.balance}$\n`);
            }
        },

        getBalance(){
            console.log(`This is information about your Bank Account`);
            console.log(`Account Holder : ${this.accountHolder}, Account Number : ${this.accountNumber}, Balance : ${this.balance}$\n`);
        }
    };
}

function Bank(bankName) {
    return {
        bankName : bankName,
        accounts : [],

        addAccount(account) {
            if (account && typeof account.deposit === 'function' && account.hasOwnProperty('accountNumber')) {
                this.accounts.push(account);
                console.log(`${this.bankName}: Account #${account.accountNumber} (${account.accountHolder}) was successfully added.`);
            } else {
                throw new Error("Invalid account object provided.");
            }
        },

        findAccount(accountNumber) {
            return this.accounts.find(acc => acc.accountNumber === accountNumber);
        },

        getTotalBalance() {
            return this.accounts.reduce((total, account) => total + account.balance, 0);
        }
    };
}


const myBank = new Bank("ACBA");
console.log(`Bank "${myBank.bankName}" has been created.\n`);

const _first_account = new createAccount("Manvel Lambaryan", "№2008");
const _second_account = new createAccount("Ashot Poghosyan", "№2003");

myBank.addAccount(_first_account);
myBank.addAccount(_second_account);

//          First Account
_first_account.deposit(10000);
_first_account.withdraw(1200);

//          Second Account
_second_account.deposit(10000);
_second_account.withdraw(4990);

//                 For   Get
_first_account.getBalance();
_second_account.getBalance();

const  _Find_first_account = myBank.findAccount("№2008");

if(_Find_first_account ){
    console.log(`Found  --> : ${_Find_first_account.accountHolder}`);
}else {
    console.log("I can't find first account(");
}

const _Find_second_account = myBank.findAccount("№2000");

if(_Find_second_account){
    console.log(`Found  --> :  ${_Find_second_account.accountHolder}`);
}else {
    console.log("I can't find second account(");
}