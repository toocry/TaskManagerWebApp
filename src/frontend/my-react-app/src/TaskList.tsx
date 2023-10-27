
  import React, { useEffect, useState } from 'react'
  import { deleteTask, fetchTasks, setComplete } from './api'
import axios from 'axios';
  const TaskList = () => {
    const [tasks, setTasks]  = useState(null);
    
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
            
            console.log(tasks)
        }
        getTasks();

        }, [])
    
    const toggleCompletion = async (taskId: number) => {
        await setComplete(taskId);


        setTasks(tasks.map((task: any) => task.id === taskId ? {...task, completed: !task.completed} : task))
        
    }
    const handleDelete = async (taskId: number) => {
        await deleteTask(taskId);
        setTasks(tasks.filter((task: any) => task.id !== taskId));
    }

    return (
      <div>
        <h3>🗒 TaskList</h3>


            {tasks && tasks.map((task: any, i) => (
            
            <details>
                <summary style={{display:"flex", justifyContent:"space-between", alignItems:'center'}}>
                   
                   
                   
                    <div> 
                        <input type="checkbox" checked={task.completed} onChange={() => toggleCompletion(task.id)}/>
                        <button onClick={() => handleDelete(task.id)} role="button" className="outline" style={{color:'red', borderColor:'red'}}>Delete</button> 
                    </div>
                    <div style={{textAlign: 'right'}}>{task.title}</div>
                </summary>
                <p>{task.description}</p>
            </details>
           
            ))}
    
        
    </div>

    )
  }
  
  export default TaskList