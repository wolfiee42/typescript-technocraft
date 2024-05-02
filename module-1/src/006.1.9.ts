// Type alias


// for object
type Student = {
    stuname: string;
    idNum: number;
    adress?: string;
    contantNo: string;
    isAdmin: boolean
}

const stu1: Student = {
    stuname: "Ashik",
    idNum: 1,
    adress: 'sharah al-haj, makkah, ksa',
    contantNo: '0123456789',
    isAdmin: true
}
const stu2: Student = {
    stuname: "Ali",
    idNum: 2,
    contantNo: '9876543210',
    isAdmin: false,
}
const stu3: Student = {
    stuname: "Rayan",
    idNum: 3,
    adress: 'Uttara, Dhaka',
    contantNo: '0987654321',
    isAdmin: false
}


// for funciton

type AddFunc = (num1: number, num2: number) => string

const addNumbers: AddFunc = (num1, num2) => {
    const result = num1 + num2
    return `the result is ${result}`;
}

addNumbers(5, 7);