import React, {useState, FormEvent} from 'react';
import {handleRegister, handleLogin, useAuthentication} from './api';
import {Link, useNavigate} from 'react-router-dom';

function SignUp() {
    // register using 2 times password: 1 for password, 1 for confirmation
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    // const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const {authenticated, setAuthenticated} = useAuthentication();

    const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // test case: password and passwordConfirmation are not the same
        if (password !== passwordConfirmation) {
            setErrorMessage('Passwords do not match');
            return;
        }
        // test case: username, password, passwordConfirmation are empty
        if (username === '' || password === '' || passwordConfirmation === '') {
            setErrorMessage('Please fill in all fields');
            return;
        }

        

        try{
            const success = await handleRegister(username, password, passwordConfirmation);

            // if successfully registered, invoke login function
            // const response = await handleLogin(username, password);

            if(success){
                setAuthenticated(true);
                navigate('/home');
            } else {
                console.log("fukc nigga");
            }
        } 
        catch (err) {
            console.error(err);
        }



    };

    return (
        <div>
            {/* error message here */}
            <h3>{errorMessage}</h3>
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSubmitRegister}>
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