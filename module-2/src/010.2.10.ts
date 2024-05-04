
// mapped type

const arrOfNumber: number[] = [1, 4, 6, 8];

const arrOfString: string[] = arrOfNumber.map((number) => {
    return number.toString();
})

console.log(arrOfString);


type AreaNumber = {
    height: number;
    width: number;
}

// mapped type
type AreaString = {
    [index in keyof AreaNumber]: string
}

// look up type
type height = AreaString['height'];


// Generic mapped type
type Area<T> = {
    [index in keyof T]: T[index]   // T[index] syntax of look up type
}

const place01: Area<{ height: number; width: string }> = {
    height: 10,
    width: '5',
}