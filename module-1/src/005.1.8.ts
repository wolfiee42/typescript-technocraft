// Destructuring


// object destructuring
const bioData1 = {
    name: 'ashik',
    age: 20,
    isMarried: false,
    address: {
        street: 'sharah al-hajj',
        city: 'makkah',
        country: 'Saudi arabia'
    },
    phoneNumber: 1234567890,
}


const { name: personsName, address: { city } } = bioData1;
console.log(personsName, city);



// array destructuring
const bhaginas: string[] = ['ahyan', 'zahran', 'hisham', 'omair', 'ahnaf'];

const [x, y, kochi, ...restKochis] = bhaginas;
const [, , , q] = bhaginas;

console.log(kochi);
console.log(restKochis);
console.log(q);