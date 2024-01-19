import { produce } from 'immer';
import { ITask } from '../../models/ITask';

const getSortingDnDTasks = (tasks: Array<ITask>) => {
  console.log(tasks);

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
