import { configureStore } from "@reduxjs/toolkit";

import { tasksReducers } from "./reducer.js";

export const store = configureStore({
    reducer: {
        tasks: tasksReducers
    }
})