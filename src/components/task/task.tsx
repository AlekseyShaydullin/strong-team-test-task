import { DragEvent, FC } from 'react';
import cn from 'classnames';

import style from './task.module.scss';

import Checkbox from '../ui/checkbox/checkbox';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';

import { ITask } from '../../models/ITask';

import { useAppDispatch } from '../../utils/hooks/redux';
import { getLocalizationDate } from '../../utils/helpers/getLocalizationDate';

import { deleteTask } from '../../store/reducers/tasksSlice';
import TodoTextBlock from './todoTextBlock/todoTextBlock';

interface ITaskProps {
  tasks: ITask;
  isLeave: boolean;
  isOver: boolean;
  openPopup: (id: string) => void;
  onDragStart: () => void;
  onDragLeave: () => void;
  onDragEnd: () => void;
  onDragOver: (e: DragEvent<HTMLLIElement>) => void;
  onDrop: (e: DragEvent<HTMLLIElement>) => void;
}

/**
 * Компонент Task - Отвечает за отрисовку и состояние Таски
 * @param tasks - Массив тасок
 * @param isLeave - Сосстояние при DnD начало движения
 * @param isOver - Сосстояние при DnD конец движения
 * @param openPopup - callback отвечающий за открытие Popup
 * @param onDragStart - callback при DnD - Срабатывает, когда пользователь начинает перетаскивать элемент.
 * @param onDragLeave - callback при DnD - Событие, которое вызывается, когда элемент над которым находится курсор мыши, покидает область другого элемента
 * @param onDragEnd - callback при DnD - Срабатывает, когда пользователь прекращает перетаскивать что-то.
 * @param onDragOver - callback при DnD - Срабатывает на действительной цели падения, когда перетаскиваемое содержимое перетаскивается на нее.
 * @param onDrop - callback при DnD Срабатывает, когда что-то падает на допустимую цель падения.
 * @returns {JSX.Element}
 */
const Task: FC<ITaskProps> = ({
  tasks,
  isLeave,
  isOver,
  openPopup,
  onDragStart,
  onDragLeave,
  onDragEnd,
  onDragOver,
  onDrop,
}): JSX.Element => {
  const { date, id, result, plans, task } = tasks;
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(deleteTask(id));
  };

  const localizationDate = getLocalizationDate(date);

  return (
    <li
      className={cn(
        style.task__wrapper,
        isLeave ? style.dragLeave : isOver ? style.dragOver : ''
      )}
      onDragStart={onDragStart}
      onDragLeave={onDragLeave}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      draggable
    >
      <Checkbox checked={result} id={id} />
      <TodoTextBlock
        checked={result}
        date={localizationDate}
        task={task}
        plans={plans}
      />
      <div className={style.buttons}>
        <ButtonIcon
          icon="edit"
          isColored
          extraClass={style.icon}
          onClick={() => openPopup(id)}
        />
        <ButtonIcon
          icon="trash-button"
          isColored
          extraClass={style.icon__trash}
          onClick={handleRemove}
        />
      </div>
    </li>
  );
};

export default Task;
