"use strict";
// Type Guard Using Typeof & In
// typeof
const addTwoParams = (param1, param2) => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString().concat(param2.toString());
    }
};
const result001 = addTwoParams(3, "8");
console.log(result001);
const getUser = (user) => {
    if ('role' in user) {
        console.log(`hi! i am ${user.name}. and i am working as an ${user.role} in programming hero.`);
    }
    else {
        console.log(`hi! i am ${user.name}. cureently i am looking for a job.`);
    }
};
const person1 = {
    name: 'ashik',
    role: 'Admin'
};
const person2 = {
    name: 'Farooq',
};
getUser(person1);
getUser(person2);
