import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from './api';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTodos.pending, state => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(getTodos.rejected, state => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

const todoSliceReducer = todoSlice.reducer;
export default todoSliceReducer;
