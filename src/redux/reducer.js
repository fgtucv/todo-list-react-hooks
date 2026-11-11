import { createSlice } from "@reduxjs/toolkit";

import { getTasksThunk, deleteTaskThunk, changeTaskCompletedThunk } from "./operations.js";

const initialState = {
    data: [],
    isError: false,
    isLoading: false,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTasksThunk.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(getTasksThunk.rejected, (state) => {
                state.isError = true
                state.isLoading = false
            })
            .addCase(getTasksThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isError = false
                state.data = payload
            })
            .addCase(deleteTaskThunk.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(deleteTaskThunk.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(deleteTaskThunk.fulfilled, (state, { payload }) => {
                const newTasks = state.data.filter((t) => t.id !== payload)
                state.isLoading = false
                state.isError = false
                state.data = newTasks
            })
            .addCase(changeTaskCompletedThunk.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(changeTaskCompletedThunk.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(changeTaskCompletedThunk.fulfilled, (state, { payload }) => {
                const newTasks = state.data.map((t) => {
                    if (t.id === payload) {
                        return {
                            ...t,
                            isCompleted: !t.isCompleted
                        }
                    }

                    return t;
                })
                state.isLoading = false
                state.isError = false
                state.data = newTasks
            })
    }
});

export const tasksReducers = tasksSlice.reducer;