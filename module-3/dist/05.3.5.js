"use strict";
{
    // access modifier
    // 
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addMoney(amount) {
            this._balance += amount;
        }
        getMoney() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            // this.
        }
    }
    const bankAcount01 = new BankAccount(112, 'Mr. Ashik', 1000000);
    bankAcount01.addMoney(200);
    console.log(bankAcount01);
    console.log(bankAcount01.getMoney());
    // 
}
