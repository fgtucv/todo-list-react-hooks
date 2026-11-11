export async function getTasksService() {
    const data =
        await fetch("https://6af46c3e55a1de7dcf040201.mockapi.io/tasks-list/tasks");

    return data.json();
};

export async function deleteTaskService(taskId) {
    // const data =
        await fetch(`https://6af46c3e55a1de7dcf040201.mockapi.io/tasks-list/tasks/${taskId}`, {
            method: "DELETE"
        });

    return taskId;
}

export async function completedTaskService(taskId, currentStatus) {

    console.log(currentStatus)
    // const tasks = 
    await fetch(`https://6af46c3e55a1de7dcf040201.mockapi.io/tasks-list/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: !currentStatus }),
    });

    return taskId
}