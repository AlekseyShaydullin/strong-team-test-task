import { ITask } from '../../models/ITask';

const getSearch = (tasks: Array<ITask>, searchString: string) => {
  return tasks.filter((task) =>
    task.task.toLowerCase().includes(searchString.toLowerCase())
  );
};

export default getSearch;
