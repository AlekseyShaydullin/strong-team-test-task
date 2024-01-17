import { FC, useState } from 'react';
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
import ModalChangeTask from '../../components/modals/modal- change-task/modal-change-task';
import { ITask } from '../../models/ITask';

const Tasks: FC = (): JSX.Element => {
  const { tasks, counter, filter, sorting } = useAppSelector(selectState);
  const [isOpen, setOpenPopup] = useState(false);
  const [todo, setTodo] = useState<ITask | null>(null);

  // Сортируем массив перед отрисовкой:
  const sortingTasks = getSortedTasks(tasks, sorting);

  // Применяем фильтры к массиву перед отрисовкой:
  const filterTasks = getFilterTasks(sortingTasks, filter);

  const openPopup = (id: string): void => {
    setOpenPopup(!isOpen);
    const todo = tasks.find((task) => task.id === id);
    if (!todo) {
      setTodo(null);
    } else {
      setTodo(todo);
    }
  };

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
          filterTasks
            .map((task) => {
              return (
                <ul key={task.id}>
                  <Task tasks={task} openPopup={openPopup} />
                </ul>
              );
            })
            .reverse()
        ) : (
          <Empty />
        )}
      </div>
      {isOpen && todo && (
        <ModalChangeTask closeModal={() => setOpenPopup(false)} task={todo} />
      )}
    </section>
  );
};

export default Tasks;
