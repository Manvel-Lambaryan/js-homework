class BankAccount {
    #balance;
    constructor(accountHolder, accountNumber, balance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            logActivity(`DEPOSIT: ${amount}$ to acc #${this.accountNumber}. New balance: ${this.#balance}$`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            logActivity(`WITHDRAW: ${amount}$ from acc #${this.accountNumber}. New balance: ${this.#balance}$`);
        } else {
             logActivity(`WITHDRAW FAILED for acc #${this.accountNumber}. Insufficient funds.`, 'error');
        }
    }
    getBalance() { return this.#balance; }
}

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.accounts = [];
    }
    addAccount(account) {
        if (this.findAccount(account.accountNumber)) {
            logActivity(`Error: Account #${account.accountNumber} already exists.`, 'error');
            return;
        }
        this.accounts.push(account);
        logActivity(`Account #${account.accountNumber} (${account.accountHolder}) was added.`);
    }
    findAccount(accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }
    getTotalBalance() {
        return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
    }
}


const bankNameEl = document.getElementById('bank-name');
const totalBalanceEl = document.getElementById('total-balance');
const accountsContainerEl = document.getElementById('accounts-container');
const activityLogEl = document.getElementById('activity-log');

function logActivity(message, type = 'log') {
    const li = document.createElement('li');
    li.textContent = message;
    if (type === 'error') {
        li.style.color = 'red';
    }
    activityLogEl.prepend(li);
}

function renderUI(bank) {
    bankNameEl.textContent = bank.bankName;
    totalBalanceEl.textContent = `$${bank.getTotalBalance()}`;

    accountsContainerEl.innerHTML = '';
    if (bank.accounts.length === 0) {
        accountsContainerEl.innerHTML = '<p>No accounts yet. Add one using the form.</p>';
    } else {
        bank.accounts.forEach(acc => {
            const card = document.createElement('div');
            card.className = 'account-card';
            card.innerHTML = `
                <h3>${acc.accountHolder}</h3>
                <p class="account-number">Acc. #: ${acc.accountNumber}</p>
                <p class="balance">$${acc.getBalance()}</p>
            `;
            accountsContainerEl.appendChild(card);
        });
    }
}



const myBank = new Bank("Interactive Digital Bank");
renderUI(myBank); 
const addAccountForm = document.getElementById('add-account-form');
addAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const holder = document.getElementById('account-holder').value;
    const number = parseInt(document.getElementById('account-number').value);
    const balance = parseInt(document.getElementById('initial-balance').value);

    const newAccount = new BankAccount(holder, number, balance);
    myBank.addAccount(newAccount);
    
    renderUI(myBank);
    addAccountForm.reset();
});

const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

depositBtn.addEventListener('click', () => {
    const number = parseInt(document.getElementById('trans-account-number').value);
    const amount = parseInt(document.getElementById('trans-amount').value);
    const account = myBank.findAccount(number);

    if (account && amount) {
        account.deposit(amount);
        renderUI(myBank);
        document.getElementById('transaction-form').reset();
    } else {
        logActivity('Invalid account number or amount for deposit.', 'error');
    }
});

withdrawBtn.addEventListener('click', () => {
    const number = parseInt(document.getElementById('trans-account-number').value);
    const amount = parseInt(document.getElementById('trans-amount').value);
    const account = myBank.findAccount(number);

    if (account && amount) {
        account.withdraw(amount);
        renderUI(myBank);
        document.getElementById('transaction-form').reset();
    } else {
        logActivity('Invalid account number or amount for withdrawal.', 'error');
    }
});