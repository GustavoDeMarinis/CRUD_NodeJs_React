import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksList: [],
  },
  reducers: {
    setTaskList: (state, action) => {
      state.tasksList = action.payload;
    },
  },
});

export const { setTaskList } = tasksSlice.actions;

export default tasksSlice.reducer;
