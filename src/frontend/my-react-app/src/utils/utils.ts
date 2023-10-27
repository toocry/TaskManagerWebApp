import axios from 'axios';

const fetchTasks = async () => {
    try {
        const response = await axios.get('/api/tasks', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data.tasks;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { fetchTasks };