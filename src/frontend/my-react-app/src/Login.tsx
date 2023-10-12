import React, {useState, FormEvent} from 'react';
import { handleLogin } from './api';
import { Link } from 'react-router-dom';

function Login()  {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');   

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleLogin(username, password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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


