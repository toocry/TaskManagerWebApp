
import React from 'react'
import { addTask } from './api'
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';

export const TaskCreation = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task = {
            title,
            description
        }
        const response = await addTask(task);
        
        console.log("TaskCreation.tsx: handleSubmit: username: ", task);
        window.location.reload();
        
    }

  return (
    <div>

        <details>
            <summary>
                
                <b>
                    <u>
                        Create New Task
                        </u>
                        
                </b>
                    
                
                
                </summary>
            
              
               
                
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                 <button type="submit">Create</button>
            </form>
        </details>

        

    </div>
  )
}
