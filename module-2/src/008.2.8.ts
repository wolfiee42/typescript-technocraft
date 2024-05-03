// creating promise

const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'something';
        if (data) {
            resolve(data);
        } else {
            reject('Data not found.');
        }
    })
}



const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
}
// showData();

type TodoList = {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const getUser = async (): Promise<TodoList> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data
}
getUser(); 