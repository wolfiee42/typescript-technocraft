"use strict";
// OOP --> Inheritance
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
    takeSleep(hoursOfSleep) {
        console.log(`${this.name} daily sleeps ${hoursOfSleep}`);
    }
}
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeSleep(hoursOfSleep) {
        console.log(`${this.name} daily sleeps ${hoursOfSleep}`);
    }
    takeClass(dailyClass) {
        console.log(`Mr. ${this.name} takes ${dailyClass}es a day.`);
    }
}
class Poion extends Parent {
    constructor(name, age, address, post) {
        super(name, age, address);
        this.post = post;
    }
}
const stu01 = new Student('Saif', 22, 'bakalia Access Road, Ctg');
const teacher01 = new Teacher('Ashik', 20, 'Shahrah Al Hajj, Makkah', 'Professor');
const poion01 = new Poion('mr.x', 33, 'somewhere in the world', 'gate-keeper');
