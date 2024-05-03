const createArr = (params: string): string[] => {
    return [params]
}

const createArrWithGenerics = <T>(params: T): T[] => {
    return [params]
}

const createArrWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
}

interface User { id: number; name: string }


createArr('bangladesh');

createArrWithGenerics<number>(20);
createArrWithGenerics<string>('bangladesh');
createArrWithGenerics<User>({ id: 10, name: 'saif' })

createArrWithTuple<string, number>('bangaldesh', 1971);
createArrWithTuple<boolean, string>(true, 'greetings');


const addCourseToStudent = <T>(student: T) => {
    const course = 'Next level web development';
    return {
        ...student, course
    }
}

interface Student {
    name: string;
    id: number;
}

addCourseToStudent<Student>({ name: 'saif', id: 1, })