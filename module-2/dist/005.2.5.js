"use strict";
const createArr = (params) => {
    return [params];
};
const createArrWithGenerics = (params) => {
    return [params];
};
const createArrWithTuple = (param1, param2) => {
    return [param1, param2];
};
createArr('bangladesh');
createArrWithGenerics(20);
createArrWithGenerics('bangladesh');
createArrWithGenerics({ id: 10, name: 'saif' });
createArrWithTuple('bangaldesh', 1971);
createArrWithTuple(true, 'greetings');
const addCourseToStudent = (student) => {
    const course = 'Next level web development';
    return Object.assign(Object.assign({}, student), { course });
};
addCourseToStudent({ name: 'saif', id: 1, });
