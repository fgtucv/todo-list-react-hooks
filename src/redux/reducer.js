import { createSlice } from "@reduxjs/toolkit";

import { getTasksThunk } from "./operations.js";

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
            })
            .addCase(getTasksThunk.rejected, (state) => {
                state.isError = true
                state.isLoading = false
            })
            .addCase(getTasksThunk.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.isLoading =false
                state.isError = false
                state.data = payload
            })
    }
});

export const tasksReducers = tasksSlice.reducer;