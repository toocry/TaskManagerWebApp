import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000';


export {handleLogin} from './apilogin';
export {handleRegister} from './apisignup';





// make this Task interface available to other files


// export interface Task {
//     id: number;
//     title: string;
//     description: string;
//     completed: boolean;
// }

// const handleTasksDisplay = async (): Promise<Task[]> => {
//     try {
//         // Make a GET request to the API endpoint
//         const response: AxiosResponse<{ tasks: Task[] }> = await axios.get('/api/tasks' , {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,  
//             },
//         });

//         // Assuming the response contains an array of tasks
//         const tasks: Task[] = response.data.tasks;

//         // Do something with the tasks, such as displaying them in your UI
//         return tasks;
//     } catch (error) {
//         console.error(error);
//         throw error;
//         // throw new Error('Something went wrong');
//     }
// };

