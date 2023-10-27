import React, {useState, FormEvent} from 'react';
import { handleLogin, useAuthentication } from './api';
import { Link, useNavigate } from 'react-router-dom';

function Login()  {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');  
    const {authenticated, setAuthenticated} = useAuthentication();
    

    


    const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const response = await handleLogin(username, password);
        console.log("Login.tsx: handleSubmitLogin: username: ", username);
        setAuthenticated(true);
        navigate('/home');
        
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


