"use strict";
// type assertion
let anything;
anything = 'hello world!';
// (anything as string). // it shows of the es6 methods it holds.
anything = 123;
// (anything as number). // it shows of the es6 methods it holds.
// lets see a function to understand the situation ;
const gramToKg = (gram) => {
    if (typeof gram === 'string') {
        const floatNum = parseFloat(gram);
        const gramToKGValue = floatNum * 1000;
        return `the value in kg ${gramToKGValue}`;
    }
    if (typeof gram === 'number') {
        const gramToKGValue = gram * 1000;
        return gramToKGValue;
    }
};
const result1 = gramToKg(10);
const result2 = gramToKg('20');
// the concering part is here is that, if you assert a type ts wont show error message even if you declare wrong type.for example,
// const result3 = gramToKg(20) as string;  // no error
