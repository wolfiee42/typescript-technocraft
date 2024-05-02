// nullable type

const message = (text: string | null) => { // here null is a type
    if (typeof text === 'string') {
        console.log('searching');
    } else {
        console.log('Not searching');
    }
};

message(null);


// unknown data type
const convertingKMtoM = (value: unknown) => {
    if (typeof value === 'number') {
        const result = (value * 1000) / 3600;
        console.log(result.toFixed(2));
    }
    else if (typeof value === 'string') {
        const [number, operator] = value.split(' ');

        const result = (parseFloat(number) * 1000) / 3600;
        console.log(result.toFixed(2));
    }
}

convertingKMtoM('10 kmh-1');
convertingKMtoM(34);


// never type

function throwErr(msg: string): never {
    throw new Error(msg);
}

throwErr('Are bhai bhai bhai!')