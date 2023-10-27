
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import { TaskCreation } from './TaskCreation';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        try{
            axios.post('api/logout');
            localStorage.removeItem('token');
            navigate('/login');
        }
        
        catch(error){
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskCreation/>
            <TaskList/>
            
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;