import axios, { AxiosResponse } from 'axios';

const handleRegister = async (username: string, password: string, password2: string): Promise<void> => {
    
    try {
        const response: AxiosResponse<{token: string}> = await axios.post('/api/sign-up', { username, password, password2 });
        const token: string = response.data.token;
        console.log(token);
        localStorage.setItem('token', token);
    }
    catch (error) {
    
        console.error(error);
    }
};

export {handleRegister};