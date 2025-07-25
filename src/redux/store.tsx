import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './slices/counter';
import postApiSlice from './slices/post';
import todoSliceReducer from './slices/todo';

export const store = configureStore({
    // Add the generated reducer as a specific top-level slice
    reducer: {
        // The `counter` key will be used to access the state in the store
        // e.g., state.counter.value
        counter: counterSliceReducer,
        todo: todoSliceReducer,
        [postApiSlice.reducerPath]: postApiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postApiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
