import axios, { AxiosResponse } from 'axios';

const handleRegister = async (username: string, password: string, password2: string): Promise<boolean> => {
    
    try {
        const response: AxiosResponse<{token: string}> = await axios.post('/api/sign-up', { username, password, password2 });
        const token: string = response.data.token;
        console.log(token);
        localStorage.setItem('token', token);
        return true;
    }
    catch (error) {
    
        console.error(error);
        
    }
    return false;
};

export {handleRegister};