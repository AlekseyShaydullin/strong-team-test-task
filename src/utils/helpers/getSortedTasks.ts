import { produce } from 'immer';

import { ITask } from '../../models/ITask';

/**
 * Функция сортировки данных
 * @param tasks - Принимает массив задач
 * @param sorting - Принимает вид сортировки
 * @returns Возвращает отсортированный (по дате или по тексту задачи) массив объектов
 */
const getSortedTasks = (tasks: Array<ITask>, sorting: string): Array<ITask> => {
  const sortedTasks = produce(tasks, (draft) => {
    // Если не выбран вид сортировки, то возвращаем исходные перевёрнутый массив с задачами
    if (sorting === 'default') {
      draft = tasks.slice().reverse();
    }
    // Если сортируем по дате выполнения задачи
    else if (
      sorting === 'Дата по убыванию' ||
      sorting === 'Дата по возрастанию'
    ) {
      draft = tasks.slice().sort((a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();
        return sorting === 'Дата по возрастанию'
          ? timeA - timeB
          : timeB - timeA;
      });
    }
    // Если сортируем по тексту задачи
    else if (
      sorting === 'Названию по убыванию' ||
      sorting === 'Название по возрастанию'
    ) {
      draft = tasks.slice().sort((a, b) => {
        const timeA = a.task.toLowerCase();
        const timeB = b.task.toLowerCase();
        return sorting === 'Название по возрастанию'
          ? timeA.localeCompare(timeB)
          : timeB.localeCompare(timeA);
      });
    }
    return draft;
  });

  return sortedTasks;
};

export default getSortedTasks;
