import React, {useState, FormEvent} from 'react';
import { handleLogin } from './api';
import { Link, useNavigate } from 'react-router-dom';

function Login()  {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');  
    const [authenticated, setAuthenticated] = useState<boolean>(
        Boolean(localStorage.getItem('token') || false)
    );
    

    


    const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        const response = await handleLogin(username, password);
        

        if(authenticated){
            navigate('/');
        } else {
            console.log(response);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmitLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <Link to="/signup">Sign Up</Link>

        </div>
    );
};


export default Login;


