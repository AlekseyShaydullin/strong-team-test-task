import { ChangeEvent, FC, useState } from 'react';
import cn from 'classnames';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

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

/**
 * Компонент Tasks - Отрисовывает основной контент приложения. Счётчики. Фильтры и сортировку. И карточки задач
 * @returns {JSX.Elemen}
 */
const Tasks: FC = (): JSX.Element => {
  const { tasks, counterResult, filter, sorting } = useAppSelector(selectState);
  const [isOpen, setOpenPopup] = useState(false);
  const [todo, setTodo] = useState<ITask | null>(null);
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  // Реализация Drag and Drop перемещений тасок:
  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    // Позиция от куда взяли:
    const itemSourceIndex = source.index;
    // Позиция куда перенесли:
    const itemDestinationIndex = destination?.index;
    // отмена если нет объекта цели:
    if (!destination) {
      return;
    }
    // отмена если происходит сортировка или фильтрация массива:
    else if (filter !== 'Отфильтровать' || sorting !== 'Отсортировать') {
      return;
    }
    // иначе меняем полжение задачи на доске:
    else {
      dispatch(getDnDTask({ itemSourceIndex, itemDestinationIndex }));
    }
  };

  // Применяем сортировку к массиву перед отрисовкой:
  const sortingTasks = getSortedTasks(tasks, sorting);

  // Применяем фильтры к массиву перед отрисовкой:
  const filterTasks = getFilterTasks(sortingTasks, filter);

  // Открытие Попапа изменения таски
  const openPopup = (id: string): void => {
    setOpenPopup(!isOpen);
    const todo = tasks.find((task) => task.id === id);
    if (!todo) {
      setTodo(null);
    } else {
      setTodo(todo);
    }
  };

  // Получение строки поиска
  const getValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Сброс строки поиска
  const resetSearch = () => {
    () => setSearch('');
  };

  // Производим поиск в массиве перед отрисовкой:
  const foundTasks = getSearch(filterTasks, search);

  return (
    <section className={style.tasks}>
      <Counters counterTask={tasks.length} counterResult={counterResult} />
      <Filters onChange={getValueSearch} onClick={resetSearch} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div
          className={cn(
            style.wrapperTasks,
            filterTasks.length !== 0 ? style.overflow : ''
          )}
        >
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {foundTasks.length !== 0 ? (
                  foundTasks.map((task, index) => {
                    return (
                      <Task
                        key={task.id}
                        todo={task}
                        openPopup={openPopup}
                        index={index}
                      />
                    );
                  })
                ) : (
                  <Empty />
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      {isOpen && todo && (
        <ModalChangeTask closeModal={() => setOpenPopup(false)} task={todo} />
      )}
    </section>
  );
};

export default Tasks;
