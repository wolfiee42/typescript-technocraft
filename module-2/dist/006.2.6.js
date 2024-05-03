"use strict";
{
    // constraints
    // to become student parameters must have id, name, email. 
    const addCourseToStudent = (student) => {
        const course = 'Next level web development';
        return Object.assign(Object.assign({}, student), { course });
    };
    addCourseToStudent({ name: 'saif', id: 1, email: 'saif@gmail.com', emni: 'emni' });
    addCourseToStudent({ name: 'ashik', id: 2, email: 'ashik@gmail.com', emni: 'temni' });
    // addCourseToStudent({ name: 'nahin', id: 3, emni: 'kemne' })      //error
}
