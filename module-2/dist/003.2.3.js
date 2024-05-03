"use strict";
// Generics
{
    // const rollnumber: number[] = [1, 2, 3, 4, 5]
    const rollnumber = [1, 2, 3, 4, 5]; //generic
    // const items: string[] = ['pen', 'ruler', 'erazer'];
    const items = ['pen', 'ruler', 'erazer']; //generic
    // const trueFalse: boolean[] = [false, true, true];
    const trueFalse = [false, true, true]; //generic
}
// dynamic resusable generic types
{
    // const rollnumber: Array<number> = [1, 2, 3, 4, 5] 
    const rollnumber = [1, 2, 3, 4, 5]; // type generic
    // const items: Array<string> = ['pen', 'ruler', 'erazer']; 
    const items = ['pen', 'ruler', 'erazer']; // type generic
    // const trueFalse: Array<boolean> = [false, true, true]; 
    const trueFalse = [false, true, true]; // type generic
    // array of object
    const users = [
        {
            name: 'ashik',
            age: 20
        },
        {
            name: 'saif',
            age: '22'
        },
        {
            greetings: 'amigos'
        }
    ];
    const arrayOfUsers = [
        {
            name: 'ashik',
            age: 20
        },
        {
            name: 'saide',
            age: 28,
        }
    ];
    // tuple
    const manush = ['saif', 'ashik']; // normal tuple syntax
    const manushWithGT = ['ali', 'rayan']; // GT means Generic Tuple
    const userWithId = [{ name: 'saif', dept: 'english' }, 20201121];
}
