import React, { useState, useEffect } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        }, [tasks]);

    const addTask = () => {
    if (newTask.trim()) {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    }
    };

    const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
    };

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    />
                    {task.text}
                    <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
        ))}
        </ul>
    </div>
);
}

export default TodoApp;