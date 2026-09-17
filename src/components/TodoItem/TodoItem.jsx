export const TodoItem = ({ task, onToggle, onDelete }) => {
    return (
        <li className="flex items-center gap-3 p-2 border-b border-gray-200">
            <input 
                type="checkbox" 
                checked={task.isComplited || false}
                onChange={() => onToggle(task.id, task.isComplited)}
                className="w-5 h-5 cursor-pointer"
            />
            
            <h2 className={`text-lg ${task.isComplited ? "line-through text-gray-400" : "text-black"}`}>
                {task.task}
            </h2>

            <button 
                onClick={() => onDelete(task.id)}
                className="ml-auto text-red-500 hover:text-red-700"
            >
                Видалити
            </button>
        </li>
    );
};