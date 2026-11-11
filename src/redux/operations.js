import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTasksService } from "../services/tasksServices.js";

export const getTasksThunk = createAsyncThunk("tasks/getTasksThunk", () => {
    // console.log()
    return getTasksService()
})