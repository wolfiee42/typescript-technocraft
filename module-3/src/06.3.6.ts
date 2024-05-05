{
    // Getter Setter


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

        // --------> using getter

        // instead of this  // the reason i am doing this to make function and get able to access like properties.

        // getMoney() {
        //     return this._balance;
        // }

        // using this
        get Balance() {
            return this._balance
        }

        // ----------->  using setter

        // instead of this  // the reason i am doing this to make function and get able to access like properties.

        // addMoney(amount: number) {
        //     this._balance += amount
        // }

        // using this
        set deposit(amount: number) {
            this._balance += amount
        }

    }

    const bankAcount01 = new BankAccount(112, 'Mr. Ashik', 1000000);

    const myBalance = bankAcount01.Balance; //pros of getter
    console.log(myBalance);
    bankAcount01.deposit = 200; //pros of setter
    console.log(bankAcount01);



    // 
}