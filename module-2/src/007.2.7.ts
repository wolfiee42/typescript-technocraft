// Generic constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner2 = 'bike' | 'car' | 'ship'; // manual
type Owner = keyof Vehicle; //union operator with key of Vehicle


// const user2 :Owner2 = " "
// const user: Owner = "" 



// ------------------------------------------------------


const user = {
    personsName: 'saif',
    age: 22,
    city: 'ctg'
}

// to get access of object value , you can follow two steps. We are fimiliar with 1, today we'll work with 2
// 1. user.age
// 2. user['age']

function getProperty<X, Y extends keyof X>(x: X, y: Y) {
    return x[y]
}

console.log(getProperty(user, 'age'));