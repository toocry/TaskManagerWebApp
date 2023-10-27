import axios from 'axios';

import { useEffect, useState } from 'react';
import { TaskType } from './types';

axios.defaults.baseURL = 'http://localhost:8000';


export {handleLogin} from './apilogin';
export {handleRegister} from './apisignup';



export const fetchTasks = async () => {
    try {
        const response = await axios.get('/api/tasks', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}



export const useAuthentication = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(
        Boolean(localStorage.getItem('token'))
    );

    useEffect (() => {
        if (authenticated) {
            console.log('AUTHENTICATED!!!');
        }
    }, [authenticated]);

    return {authenticated, setAuthenticated};
};





export const addTask = async (task: TaskType) => {
    //post to /api/tasks with task.description and task.title
    
    try {
        const response = await axios.post('/api/add_task', task, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const setComplete = async (taskId: Number) => {
    //post to /api/tasks with task.description and task.title
    try {
        const response = await axios.post('/api/complete_task', {task_id: taskId}, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteTask = async (taskId: Number) => {
    //delete task from /api/delete_task
    try {
        const response = await axios.post('/api/delete_task', {task_id: taskId}, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}