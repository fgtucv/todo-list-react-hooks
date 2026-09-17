import { useState, useEffect } from "react";
import { TodoItem } from "../TodoItem/TodoItem.jsx";

export const TodosList = () => {
    const [tasks, setTasks] = useState([]);

    const getTasksFromApi = async () => {
        try {
            const data = await fetch("https://6aabc034ea0e22daa6dc93b2.mockapi.io/todo-list/todos");
            const tasksData = await data.json();
            setTasks(tasksData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTasksFromApi();
    }, []);
    
    const handleToggleTask = async (id, currentStatus) => {
        const newStatus = !currentStatus;

        setTasks(prev => prev.map(t => t.id === id ? { ...t, isComplited: newStatus } : t));


        try {
            await fetch(`https://6aabc034ea0e22daa6dc93b2.mockapi.io/todo-list/todos/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isComplited: newStatus })
            });
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (taskToDeleteId) => {
        setTasks(prev => prev.filter(task => task.id !== taskToDeleteId));

        try {
            await fetch(`https://6aabc034ea0e22daa6dc93b2.mockapi.io/todo-list/todos/${taskToDeleteId}`, {
                method: "DELETE"
            });
        } catch (error) {
            console.log("Помилка видалення:", error);
        }
    };

    return (
        <ul className="max-w-md mx-auto mt-5 bg-white shadow-md rounded-lg p-4">
            {tasks.map(task => (
                <TodoItem 
                    key={task.id} 
                    task={task} 
                    onToggle={handleToggleTask}
                    onDelete={deleteTask}
                />
            ))}
        </ul>
    );
};