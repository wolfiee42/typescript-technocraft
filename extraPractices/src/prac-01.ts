type Param = Record<string, unknown>

function myFunc(param: Param) {
    console.log(param);
}

myFunc({ name: 'John', age: 30 });
myFunc({ abc: 32 });
// myFunc(123);
// myFunc(true);
// myFunc([1, 2, 3]);
// myFunc(new Date());
// myFunc(() => { });
// myFunc({});