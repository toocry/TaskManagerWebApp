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




export  {handleLogin, handleRegister };