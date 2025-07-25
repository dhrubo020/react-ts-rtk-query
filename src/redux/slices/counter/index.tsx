import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const counerSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    // The `reducers` field lets us define reducers and generate associated actions
    // Each reducer function receives the current state and an action payload
    reducers: {
        // actions
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});
const counterSliceReducer = counerSlice.reducer;

export const { increment, decrement, incrementByAmount } = counerSlice.actions;

export default counterSliceReducer;
