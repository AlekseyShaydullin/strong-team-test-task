import { produce } from 'immer';

import { ITask } from '../../models/ITask';

/**
 * Функция фильтрации данных
 * @param tasks - Массив задач
 * @param filter - Категорию фильтра
 * @returns {Array<ITask>} Возвращает отфильтрованный массив задач
 */
const getFilterTasks = (tasks: Array<ITask>, filter: string): Array<ITask> => {
  const filterTasks = produce(tasks, (draft) => {
    // Если не выбранf категория фильтрации, то возвращаем исходный массив с задачами
    if (filter === 'default') {
      draft = tasks.slice();
    }
    // Если нас интересуют важные задачи
    else if (filter === 'Важное') {
      draft = tasks.slice().filter((task) => task.plans === 'IMPORTANT');
    }
    // Если нас интересуют домашние дела
    else if (filter === 'Дом') {
      draft = tasks.slice().filter((task) => task.plans === 'HOME');
    }
    // Если нас интересуют рабочие задачи
    else if (filter === 'Работа') {
      draft = tasks.slice().filter((task) => task.plans === 'WORK');
    }
    // Если нас интересуют выполненные задачи
    else if (filter === 'Выполнено') {
      draft = tasks.slice().filter((task) => task.result === true);
    }
    // Если нас интересуют невыполненные задачи
    else if (filter === 'Невыполнено') {
      draft = tasks.slice().filter((task) => task.result === false);
    }

    return draft;
  });

  return filterTasks;
};

export default getFilterTasks;
