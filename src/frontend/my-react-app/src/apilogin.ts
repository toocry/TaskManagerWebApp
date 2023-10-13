import axios, { AxiosResponse } from 'axios';

const handleLogin = async (username: string, password: string): Promise<void> => {
    
    try {
        const response: AxiosResponse<{token: string}> = await axios.post('/api/login', { username, password });
        const token: string = response.data.token;
        localStorage.setItem('token', token); 
        console.log('token', token); 
    }
    catch (error) {
        console.error(error);
    }
};

export {handleLogin};