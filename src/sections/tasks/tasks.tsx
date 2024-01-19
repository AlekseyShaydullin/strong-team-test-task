import { ChangeEvent, DragEvent, FC, useState } from 'react';
import cn from 'classnames';

import style from './tasks.module.scss';

import Counters from '../../components/counters/counters';
import Filters from '../filters/filters';
import Task from '../../components/task/task';
import Empty from '../../components/empty/empty';
import ModalChangeTask from '../../components/modals/modal-change-task/modal-change-task';

import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';
import { getDnDTask, selectState } from '../../store/reducers/tasksSlice';

import { ITask } from '../../models/ITask';

import getSortedTasks from '../../utils/helpers/getSortedTasks';
import getFilterTasks from '../../utils/helpers/getFilterTasks';
import getSearch from '../../utils/helpers/getSearch';
import getSortingDnDTasks from '../../utils/helpers/getSortingDnDTasks';

const Tasks: FC = (): JSX.Element => {
  const { tasks, counterResult, filter, sorting } = useAppSelector(selectState);
  const [isOpen, setOpenPopup] = useState(false);
  const [todo, setTodo] = useState<ITask | null>(null);
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  // Состояния DnD:
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);
  const [isLeave, setLeave] = useState<boolean>(false);
  const [isOver, setOver] = useState<boolean>(true);

  // Реализация Drag and Drop перемещений тасок:
  function dragStartHandler(task: ITask) {
    setCurrentTask(task);
    setLeave(true);
  }

  function dragLeaveHandler() {
    setLeave(true);
    setOver(false);
  }

  function dragEndHandler() {
    setLeave(false);
    setOver(true);
  }

  function dragOverHandler(e: DragEvent<HTMLLIElement>) {
    e.preventDefault();
    setOver(true);
  }

  function dropHandler(e: DragEvent<HTMLLIElement>, task: ITask) {
    e.preventDefault();
    dispatch(getDnDTask({ task, currentTask }));
  }

  // Сортируем массив перед отрисовкой:
  const sortingDnDTasks = getSortingDnDTasks(tasks);

  // Сортируем массив перед отрисовкой:
  const sortingTasks = getSortedTasks(sortingDnDTasks, sorting);

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

  const getValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const resetSearch = () => {
    () => setSearch('');
  };

  // Производим поиск в массиве перед отрисовкой:
  const foundTasks = getSearch(filterTasks, search);

  console.log(foundTasks);

  return (
    <section className={style.tasks}>
      <Counters counterTask={tasks.length} counterResult={counterResult} />
      <Filters onChange={getValueSearch} onClick={resetSearch} />
      <div
        className={cn(
          style.wrapperTasks,
          filterTasks.length !== 0 ? style.overflow : ''
        )}
      >
        <ul>
          {foundTasks.length !== 0 ? (
            foundTasks
              .map((task) => {
                return (
                  <Task
                    key={task.id}
                    tasks={task}
                    openPopup={openPopup}
                    onDragStart={() => dragStartHandler(task)}
                    onDragLeave={() => dragLeaveHandler()}
                    onDragEnd={() => dragEndHandler()}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, task)}
                    isLeave={isLeave}
                    isOver={isOver}
                  />
                );
              })
              .reverse()
          ) : (
            <Empty />
          )}
        </ul>
      </div>
      {isOpen && todo && (
        <ModalChangeTask closeModal={() => setOpenPopup(false)} task={todo} />
      )}
    </section>
  );
};

export default Tasks;
