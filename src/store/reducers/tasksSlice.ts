import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

import { ITask } from '../../models/ITask';
import {
  IAddTaskAction,
  IChangeTaskAction,
  IGetDnDTask,
} from '../../utils/types/common';

interface ITodo {
  tasks: Array<ITask>;
  sortingTasks: Array<ITask>;
  counterResult: number;
  counterPosition: number;
  filter: string;
  sorting: string;
}

const initialState: ITodo = {
  tasks: [],
  sortingTasks: [],
  counterResult: 0,
  counterPosition: 1,
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
        position: action.payload.counterPosition,
        task: action.payload.todo,
        result: false,
        date: action.payload.date,
        plans: action.payload.plans,
      });
      state.counterPosition++;
    },
    addResultTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find((todo) => todo.id === action.payload);
      if (task && !task.result) {
        task.result = !task.result;
        state.counterResult++;
      } else if (task && task.result) {
        task.result = !task.result;
        state.counterResult--;
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find((todo) => todo.id === action.payload);
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
      if (task && task.result) {
        state.counterResult--;
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
    changeTask(state, action: PayloadAction<IChangeTaskAction>) {
      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task.date = action.payload.date;
          task.task = action.payload.todo;
          task.plans = action.payload.plans;
        }
      });
    },
    getDnDTask(state, action: PayloadAction<IGetDnDTask>) {
      state.tasks.map((todo) => {
        if (
          todo.id === action.payload.task.id &&
          action.payload.currentTask !== null
        ) {
          todo.position = action.payload.currentTask.position;
        }
        if (
          action.payload.currentTask !== null &&
          todo.id === action.payload.currentTask.id
        ) {
          todo.position = action.payload.task.position;
        }
      });
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
  changeTask,
  getDnDTask,
} = tasksSlice.actions;
export const { selectState } = tasksSlice.selectors;

export default tasksSlice.reducer;
