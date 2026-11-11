import { useState, useEffect } from "react";
import { TodoItem } from "../TodoItem/TodoItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getTasksThunk, deleteTaskThunk, changeTaskCompletedThunk } from "../../redux/operations.js";

export const TodosList = () => {
    const dispatch = useDispatch();
    const { data: tasks, isError, isLoading } = useSelector((state) => state.tasks);

    useEffect(() => {
        console.log(1)
        dispatch(getTasksThunk())
    }, [dispatch]);
    
    const handleToggleTask = async (taskId, currentStatus) => {
        console.log(currentStatus)
        dispatch(changeTaskCompletedThunk({taskId, currentStatus}))
    };

    const deleteTask = async (taskId) => {
        dispatch(deleteTaskThunk(taskId))
    };

    if (isError) return (<div>Помилка запиту</div>);
    if (isLoading) return (<div>Завнтаження...</div>);

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