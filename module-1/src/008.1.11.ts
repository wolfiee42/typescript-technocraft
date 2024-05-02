// ternary operator, optional chaining, nullish coalscing operator.



// ternary operator
const currentAge = 20;
if (currentAge >= 18) {
    console.log('adult');
} else {
    console.log('not adult');
}

const isAdult = currentAge >= 18 ? true : false;
console.log({ isAdult });






// nullish coalscing operator --> ??


// only works if the result is null or undifined.

const isAuthenticatedUser = undefined;
// const isAuthenticatedUser = '';

const result01 = isAuthenticatedUser ?? "Guest";
const result02 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ result01 }, { result02 });


// optional chaining
type User = {
    personName: string;
    age: number;
    isMarried: false;
    address: {
        street: string;
        road: string;
        permanantAdress?: string;
        presentAddress: string;
    }
}

const userNo1: User = {
    personName: 'Saif Siraj',
    age: 22,
    isMarried: false,
    address: {
        street: 'bogar bill',
        road: 'bakalia access road',
        presentAddress: 'chattogram',
    }
}

const userPermanantAdress = userNo1?.address?.permanantAdress ?? "No Permanent Adress" // in this line single '?' has used as optional chaining;
console.log({ userPermanantAdress });
