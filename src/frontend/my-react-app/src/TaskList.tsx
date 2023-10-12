import React, { useEffect, useState } from 'react';
import { Task, handleTasksDisplay } from './api'; // Assuming you have a Task interface defined

function TaskListPage() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        // Retrieve and set tasks when the component mounts
        handleTasksDisplay()
            .then((data) => setTasks(data));
    }, []);

    const toggleCompletion = (taskId: number) => {
        // Implement a function to update task completion status on API and locally
        // You can use a PUT request to update the task's completed field.
        
    };

    return (
        <div>
            <h2>Task List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleCompletion(task.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TaskListPage;
