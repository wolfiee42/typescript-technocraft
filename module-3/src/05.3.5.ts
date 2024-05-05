{
    // 
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addMoney(amount: number) {
            this._balance += amount
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