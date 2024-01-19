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
          icon="trash"
          isColored
          extraClass={style.icon}
          onClick={handleRemove}
        />
      </div>
    </li>
  );
};

export default Task;
