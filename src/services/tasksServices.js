export async function getTasksService() {
    const data =
        await fetch("https://6aabc034ea0e22daa6dc93b2.mockapi.io/todo-list/todos");

    return data.json();
}