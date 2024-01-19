import { ITask } from '../../models/ITask';

/**
 * Функция поиска по списку задач
 * @param tasks - Принимает массив задач
 * @param searchString - Строка которую необходимо найти в списке задач
 * @returns {Array<ITask>} отфильтрованный массив задач
 */
const getSearch = (tasks: Array<ITask>, searchString: string): Array<ITask> => {
  return tasks.filter((task) =>
    task.task.toLowerCase().includes(searchString.toLowerCase())
  );
};

export default getSearch;
