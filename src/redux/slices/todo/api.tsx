import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk('getTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
});
