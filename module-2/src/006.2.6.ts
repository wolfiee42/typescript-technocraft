{
    // constraints


    const addCourseToStudent = <T extends { id: number; email: string; name: string }>(student: T) => {
        const course = 'Next level web development';
        return {
            ...student, course
        }
    }

    addCourseToStudent({ name: 'saif', id: 1, email: 'saif@gmail.com', emni: 'emni' })
    addCourseToStudent({ name: 'ashik', id: 2, email: 'ashik@gmail.com', emni: 'temni' })

    // addCourseToStudent({ name: 'nahin', id: 3, emni: 'kemne' })      //error

}