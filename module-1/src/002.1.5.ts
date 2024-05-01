// Object type
// Optional Type
// Literal type
interface PersonDetail {
    company: string,
    readonly firstName: string,
    readonly lastName?: string, // optional type
    isMarried: boolean,
    hasCar?: "Yes" //literal type
}

const person01: PersonDetail = {
    company: 'OctopusX',
    firstName: 'saif',
    lastName: 'Siraj',
    isMarried: false,
}

const person02: PersonDetail = {
    company: 'Al Naji',
    firstName: 'Ashik',
    isMarried: false,
    hasCar: 'Yes'
}