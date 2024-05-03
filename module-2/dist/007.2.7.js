"use strict";
// Generic constraint with keyof operator
// const user2 :Owner2 = " "
// const user: Owner = "" 
// ------------------------------------------------------
const user = {
    personsName: 'saif',
    age: 22,
    city: 'ctg'
};
// to get access of object value , you can follow two steps. We are fimiliar with 1, today we'll work with 2
// 1. user.age
// 2. user['age']
function getProperty(x, y) {
    return x[y];
}
console.log(getProperty(user, 'age'));
