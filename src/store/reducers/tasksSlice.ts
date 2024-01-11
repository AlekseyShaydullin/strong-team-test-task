import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../models/ITask';

interface ITasks {
  tasks: Array<ITask>;
  result: Array<ITask>;
}

const initialState: ITasks = {
  tasks: [],
  result: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload);
    },
    addResultTask(state, action: PayloadAction<ITask>) {
      state.tasks.filter((task) => task.id !== action.payload.id);
      state.result.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<ITask>) {
      state.tasks.filter((task) => task.id !== action.payload.id);
      state.result.filter((task) => task.id !== action.payload.id);
    },
    returnTask(state, action: PayloadAction<ITask>) {
      state.result.filter((task) => task.id !== action.payload.id);
      state.tasks.push(action.payload);
    },
  },
});

export default tasksSlice.reducer;
