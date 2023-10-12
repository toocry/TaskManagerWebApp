import axios, { AxiosResponse } from 'axios';

const handleLogin = async (username: string, password: string): Promise<void> => {
    
    try {
        const response: AxiosResponse<{token: string}> = await axios.post('/api/login', { username, password });
        const token: string = response.data.token;  
    }
    catch (error) {
        console.error(error);
    }
};


const handleRegister = async (username: string, password: string, password2: string): Promise<void> => {
    try {
        const response: AxiosResponse<{token: string}> = await axios.post('/api/sign-up', { username, password, password2 });
        const token: string = response.data.token;
    }
    catch (error) {
        console.error(error);
    }
};


export  {handleLogin, handleRegister };