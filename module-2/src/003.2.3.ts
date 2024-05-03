// Generics


{
    // const rollnumber: number[] = [1, 2, 3, 4, 5]
    const rollnumber: Array<number> = [1, 2, 3, 4, 5] //generic


    // const items: string[] = ['pen', 'ruler', 'erazer'];
    const items: Array<string> = ['pen', 'ruler', 'erazer']; //generic


    // const trueFalse: boolean[] = [false, true, true];
    const trueFalse: Array<boolean> = [false, true, true]; //generic
}

// dynamic resuable generic types
{
    type Generic<T> = Array<T>


    // const rollnumber: Array<number> = [1, 2, 3, 4, 5] 
    const rollnumber: Generic<number> = [1, 2, 3, 4, 5] // type generic


    // const items: Array<string> = ['pen', 'ruler', 'erazer']; 
    const items: Generic<string> = ['pen', 'ruler', 'erazer'];// type generic

    // const trueFalse: Array<boolean> = [false, true, true]; 
    const trueFalse: Generic<boolean> = [false, true, true]; // type generic



    // array of object

    const users: Generic<object> = [ // Generic<object> using is not recommended. becasue it doesnot catch the errors instead we will use the second syntax. i.e not the following one.
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

    const arrayOfUsers: Generic<{ name: string, age: number }> = [
        {
            name: 'ashik',
            age: 20
        },
        {
            name: 'saide',
            age: 28,
        }
    ]

    // tuple

    const manush: [string, string] = ['saif', 'ashik'] // normal tuple syntax


    type GenericTuple<X, Y> = [X, Y]

}

