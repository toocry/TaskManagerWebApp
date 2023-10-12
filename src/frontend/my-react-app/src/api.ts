import axios, { AxiosResponse } from 'axios';


axios.defaults.baseURL = 'http://localhost:8000';



const handleLogin = async (username: string, password: string): Promise<void> => {
    
    try {
        const response: AxiosResponse<{token: string}> = await axios.post('/api/login', { username, password });
        const token: string = response.data.token;
        localStorage.setItem('token', token);  
    }
    catch (error) {
        console.error(error);
    }
};


const handleRegister = async (username: string, password: string, password2: string): Promise<void> => {
    
    try {
        const response: AxiosResponse<{token: string}> = await axios.post('/api/sign-up', { username, password, password2 });
        const token: string = response.data.token;
        localStorage.setItem('token', token);
    }
    catch (error) {
    
        console.error(error);
    }
};

// make this Task interface available to other files


export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const handleTasksDisplay = async (): Promise<Task[]> => {
    try {
        // Make a GET request to the API endpoint
        const response: AxiosResponse<{ tasks: Task[] }> = await axios.get('/api/tasks' , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,  
            },
        });

        // Assuming the response contains an array of tasks
        const tasks: Task[] = response.data.tasks;

        // Do something with the tasks, such as displaying them in your UI
        return tasks;
    } catch (error) {
        console.error(error);
        throw error;
        // throw new Error('Something went wrong');
    }
};

export { handleTasksDisplay };



export  {handleLogin, handleRegister };