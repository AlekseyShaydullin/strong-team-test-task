import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

import { ITask } from '../../models/ITask';
import {
  IAddTaskAction,
  IChangeTaskAction,
  IGetDnDTask,
} from '../../utils/types/redux';

interface ITodo {
  tasks: Array<ITask>;
  counterResult: number;
  counterPosition: number;
  filter: string;
  sorting: string;
}

const initialState: ITodo = {
  tasks: [],
  counterResult: 0,
  counterPosition: 0,
  filter: 'DEFAULT',
  sorting: 'DEFAULT',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Добавляем новую таску:
    addTask(state, action: PayloadAction<IAddTaskAction>) {
      state.tasks.push({
        id: uuid4(),
        position: String(action.payload.counterPosition),
        task: action.payload.todo,
        result: false,
        date: action.payload.date,
        plans: action.payload.plans,
      });
      state.counterPosition++;
    },
    // Отмечаем выполнено задание или нет:
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
    // Удаляем таску:
    deleteTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find((todo) => todo.id === action.payload);
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
      if (task && task.result) {
        state.counterResult--;
      }
    },
    // Выполням фильтрацию в зависимости от выбранной категории:
    selectFilter(state, action: PayloadAction<string>) {
      if (state.filter !== action.payload) {
        state.filter = action.payload;
      }
    },
    // Выполням сортировку в зависимости от выбранной категории:
    selectSorting(state, action: PayloadAction<string>) {
      if (state.sorting !== action.payload) {
        state.sorting = action.payload;
      }
    },
    // Вносим изменения в таску:
    changeTask(state, action: PayloadAction<IChangeTaskAction>) {
      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task.date = action.payload.date;
          task.task = action.payload.todo;
          task.plans = action.payload.plans;
        }
      });
    },
    // Меняем позиции задач на доске:
    getDnDTask(state, action: PayloadAction<IGetDnDTask>) {
      const result = Array.from(state.tasks);
      const [sourceTask] = result.splice(action.payload.itemSourceIndex, 1);
      result.splice(action.payload.itemDestinationIndex!, 0, sourceTask);
      state.tasks = result;
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
