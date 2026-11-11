import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTasksService, deleteTaskService, completedTaskService } from "../services/tasksServices.js";

export const getTasksThunk = createAsyncThunk("tasks/getTasksThunk", () => {
    // console.log()
    return getTasksService()
});

export const deleteTaskThunk = createAsyncThunk("tasks/dekleteTaskThunk", (action) => {
    return deleteTaskService(action)
});

export const changeTaskCompletedThunk = createAsyncThunk("tasks/changeTaskCompletedThunk", (action) => {
    return completedTaskService(action.taskId, action.currentStatus)
})