import { FC } from 'react';
import cn from 'classnames';

import style from './tasks.module.scss';

import Counters from '../../components/counters/counters';
import Filters from '../filters/filters';
import Task from '../../components/task/task';
import Empty from '../../components/empty/empty';

import { useAppSelector } from '../../utils/hooks/redux';
import { selectState } from '../../store/reducers/tasksSlice';
import getSortedTasks from '../../utils/helpers/getSortedTasks';
import getFilterTasks from '../../utils/helpers/getFilterTasks';

const Tasks: FC = (): JSX.Element => {
  const { tasks, counter, filter, sorting } = useAppSelector(selectState);

  console.log(filter);

  // Сортируем массив перед отрисовкой:
  const sortingTasks = getSortedTasks(tasks, sorting);

  // Применяем фильтры к массиву перед отрисовкой:
  const filterTasks = getFilterTasks(sortingTasks, filter);
  console.log(filterTasks);

  return (
    <section className={style.tasks}>
      <Counters counterTask={tasks.length} counterResult={counter} />
      <Filters />
      <div
        className={cn(
          style.wrapperTasks,
          filterTasks.length !== 0 ? style.overflow : ''
        )}
      >
        {filterTasks.length !== 0 ? (
          filterTasks.map((task) => {
            return (
              <ul key={task.id}>
                <Task {...task} />
              </ul>
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </section>
  );
};

export default Tasks;
