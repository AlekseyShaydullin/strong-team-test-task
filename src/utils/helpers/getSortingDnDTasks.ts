import { produce } from 'immer';

import { ITask } from '../../models/ITask';

/**
 * Функция сортировки данных после DnD перемещения
 * @param tasks - Принимает массив задач
 * @returns {Array<ITask>} Возвращает отсортированный массив
 */
const getSortingDnDTasks = (tasks: Array<ITask>): Array<ITask> => {
  const sortingDnDTasks = produce(tasks, (draft) => {
    draft = tasks.slice().sort((a, b) => {
      if (a.position > b.position) {
        return 1;
      } else {
        return -1;
      }
    });
    return draft;
  });
  return sortingDnDTasks;
};

export default getSortingDnDTasks;
