// Spread Operator
// Rest Operator
// Destructuring


// Spread operator
const friendsList1: string[] = ['Ashik', 'Ali'];
const friendsList2: string[] = ['Nahin', 'Rayan'];

// friendsList1.push(friendsList2) //error //output:  ['Ashik', 'Ali', ['Nahin', 'Rayan']];

friendsList1.push(...friendsList2);


const friendsObject1 = {
    ashik: 'bussiness-man',
    ali: 'judge',
}

const frinedsObject2 = {
    nahin: 'tech-guy',
    rayan: 'bussiness-man'
};

const friendList = { ...friendsObject1, ...frinedsObject2 }





// rest operator

const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    console.log(`hello! ${friend1} ${friend2} ${friend3}`);
};

greetFriends('ashik', 'nahin', 'ali'); // here the parameters are fixed. i can not increase or decrease my friends names means parameters. to resolve this problem we can seek help of rest operators.

const greetUnlimitedFriends = (...friends: string[]) => {
    friends.forEach((friend) => {
        console.log(`hello! ${friend}`);
    })
};

greetUnlimitedFriends('habib', 'famim', 'safwan', 'hasan')
