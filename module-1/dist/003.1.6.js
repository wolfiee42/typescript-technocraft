"use strict";
// function
// normal function
function addNum(a, b) {
    return a + b;
}
addNum(2, 3);
// arrow function
const intoNum = (c, d) => {
    return c * d;
};
intoNum(3, 4);
// method -> if function is called inside object, it is called method.
const person003 = {
    personName: "Ashik",
    balance: 100,
    addBalance(balance) {
        return `${this.personName}'s balance is $${this.balance + balance} `;
    }
};
const arr = [1, 4, 5];
const newArr = arr.map((elem) => elem * elem);
