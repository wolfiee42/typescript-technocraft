type UserType = {
    userName: string;
    age: number
}

type UserType2 = UserType & {
    role: string;
}


// interface
interface PersonInterface {
    personName: string;
    age: number;
}

interface PersonInterface2 extends PersonInterface {
    role: string;
}


// using type 
const user001: UserType = {
    userName: 'ashik',
    age: 20,
}

const user002: UserType2 = {
    userName: 'ali',
    age: 21,
    role: 'lawyer'
}


// using interface
const personName: PersonInterface = {
    personName: 'Saif',
    age: 22,
}

const personName2: PersonInterface2 = {
    personName: 'nahin',
    age: 23,
    role: 'CTO'
}


type RollType = number[];

const rollArr: RollType = [1, 2, 3];


//array
// creating interface for array
interface RollInterface {
    [index: number]: string
}

const rollArrInterface: RollInterface = ['a', 'b', 'c', 'd']


type NumFunc = (x: number, y: number) => number
// interface for function 
interface NumFuncInterface {
    (p: number, q: number): number
}


const addition: NumFunc = (x, y) => x + y;
const deduction: NumFuncInterface = (p, q) => p - q;