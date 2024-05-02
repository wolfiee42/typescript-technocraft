// union type --> | --> OR

type FrontendDev = 'Noob' | 'JuniorDev';

type BackendDev = 'jrFrontend' | 'Fullstack';

type Developer = FrontendDev | BackendDev;

const newDev: Developer = 'JuniorDev';

type JRFront = {
    stack: 'Mern' | 'Mean' | 'Menn';
    auth: 'OAuth' | 'Firebase';
    DB: 'mongoDB' | 'FireStore';
}

const developerInTheTown: JRFront = {
    stack: 'Mern',
    auth: 'Firebase',
    DB: 'mongoDB'
}


// intersection type --> & --> AND
type FrDev = {
    skillSet: string[];
    designation001: "Frontend Developer";
}
type BeDev = {
    skillSet: string[];
    designation002: "Backend Developer";
}

type FullstackDeveloper = FrDev & BeDev;

const saif: FullstackDeveloper = {
    skillSet: ['HTML', 'React', 'Node'],
    designation001: 'Frontend Developer',
    designation002: 'Backend Developer',
}