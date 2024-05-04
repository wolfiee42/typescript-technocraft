// utilities type

type Person = {
    userName: string;
    age: number;
    address: string;
    nationality: string;
    email?: string;
    contantNo: number;
}


// Pick type
type UserType001 = Pick<Person, 'userName'>
type UserType002 = Pick<Person, 'userName' | 'age'>

// Omit Type //to remove
type ContactUser = Omit<Person, 'userName' | 'age' | 'address' | 'nationality'>

// Required //makes everything required
type PersonRequired = Required<Person>

// Partial //Makes everything optional in the type
type PersonPartial = Partial<Person>

// ReadOnly
type PersonReadOnly = Readonly<Person>
const UserNo1: PersonReadOnly = {
    userName: 'habiba',
    age: 23,
    address: "Cox's Bazar",
    nationality: 'bengali',
    email: 'habiba@kiShomossha.com',
    contantNo: 1234543212,
};

// UserNo1.userName = 'saif' //error

// Record
type Anything = {
    a: string;
    b: string;
}

const userno2: Anything = {
    a: 'aa',
    b: 'bb',
    // c: 'cc'  // error
}

type AnythingDynamic = Record<string, string>

const userNo3: AnythingDynamic = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
    d: 'dd'
    // e: 11 // but but but, it can make on types of data type
}


type AnythingDynamicGeneric = Record<string, unknown>

const emptyObject: Record<string, unknown> = {};

const userNo4: AnythingDynamicGeneric = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
    d: 'dd',
    e: 11,
    f: true,
    g: undefined,
}