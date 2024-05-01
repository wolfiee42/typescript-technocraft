// function

// normal function
function addNum(a: number, b: number): number {
    return a + b
}
addNum(2, 3);

// arrow function
const intoNum = (c: number, d: number): number => {
    return c * d
}
intoNum(3, 4);

// method -> if function is called inside object, it is called method.
const person003 = {
    personName: "Ashik",
    balance: 100,
    addBalance(balance: number): string {
        return `${this.personName}'s balance is $${this.balance + balance} `
    }
}

const arr = [1, 4, 5];
const newArr: number[] = arr.map((elem: number): number => elem * elem);
