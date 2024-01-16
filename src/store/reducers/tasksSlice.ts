import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

import { ITask } from '../../models/ITask';
import { IAddTaskAction } from '../../utils/types/common';

interface ITodo {
  tasks: Array<ITask>;
  sortingTasks: Array<ITask>;
  counter: number;
  filter: string;
  sorting: string;
}

const initialState: ITodo = {
  tasks: [],
  sortingTasks: [],
  counter: 0,
  filter: 'DEFAULT',
  sorting: 'DEFAULT',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<IAddTaskAction>) {
      state.tasks.push({
        id: uuid4(),
        task: action.payload.todo,
        result: false,
        date: action.payload.date,
        plans: action.payload.plans,
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
    selectFilter(state, action: PayloadAction<string>) {
      if (state.filter !== action.payload) {
        state.filter = action.payload;
      }
    },
    selectSorting(state, action: PayloadAction<string>) {
      if (state.sorting !== action.payload) {
        state.sorting = action.payload;
      }
    },
  },
  selectors: {
    selectState: (state) => state,
  },
});

export const {
  addTask,
  addResultTask,
  deleteTask,
  selectFilter,
  selectSorting,
} = tasksSlice.actions;
export const { selectState } = tasksSlice.selectors;

export default tasksSlice.reducer;
