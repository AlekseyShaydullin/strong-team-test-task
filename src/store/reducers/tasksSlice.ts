import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

import { ITask } from '../../models/ITask';

interface ITodo {
  tasks: Array<ITask>;
  counter: number;
}

const initialState: ITodo = {
  tasks: [],
  counter: 0,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: uuid4(),
        task: action.payload,
        result: false,
      });
    },
    addResultTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find((todo) => todo.id === action.payload);
      if (task && !task.result) {
        task.result = !task.result;
        state.counter++;
      } else if (task && task.result) {
        task.result = !task.result;
        state.counter--;
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find((todo) => todo.id === action.payload);
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
      if (task && task.result) {
        state.counter--;
      }
    },
  },
  selectors: {
    selectState: (state) => state,
  },
});

export const { addTask, addResultTask, deleteTask } = tasksSlice.actions;
export const { selectState } = tasksSlice.selectors;

export default tasksSlice.reducer;
