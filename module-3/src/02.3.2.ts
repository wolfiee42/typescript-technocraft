// OOP --> Inheritance

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
    takeSleep(hoursOfSleep: number) {
        console.log(`${this.name} daily sleeps ${hoursOfSleep}`);
    }
}

class Teacher extends Parent {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }
    takeSleep(hoursOfSleep: number) {
        console.log(`${this.name} daily sleeps ${hoursOfSleep}`);
    }
    takeClass(dailyClass: number) {
        console.log(`Mr. ${this.name} takes ${dailyClass}es a day.`);
    }
}


const stu01 = new Student('Saif', 22, 'bakalia Access Road, Ctg');
const teacher01 = new Teacher('Ashik', 20, 'Shahrah Al Hajj, Makkah', 'Professor')