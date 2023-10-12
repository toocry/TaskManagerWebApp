import React, {useState, FormEvent} from 'react';
import {handleRegister} from './api';
import {Link} from 'react-router-dom';

function SignUp() {
    // register using 2 times password: 1 for password, 1 for confirmation
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    // const [email, setEmail] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleRegister(username, password, passwordConfirmation);
    };

    return (
        <div>
            <h1>Sign Up Page</h1>
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
                <input
                    type="password"
                    placeholder="Password Confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>

            <Link to="/login">Login</Link>
        </div>
    );

}

export default SignUp;