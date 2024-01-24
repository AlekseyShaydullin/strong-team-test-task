import { FC } from 'react';
import cn from 'classnames';

import style from './task.module.scss';

import Checkbox from '../ui/checkbox/checkbox';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';

import { ITask } from '../../models/ITask';

import { useAppDispatch } from '../../utils/hooks/redux';
import { getLocalizationDate } from '../../utils/helpers/getLocalizationDate';

import { deleteTask } from '../../store/reducers/tasksSlice';
import TodoTextBlock from './todoTextBlock/todoTextBlock';
import { Draggable } from 'react-beautiful-dnd';

interface ITaskProps {
  todo: ITask;
  openPopup: (id: string) => void;
  index: number;
}

/**
 * Компонент Task - Отвечает за отрисовку и состояние Задачи
 * @param todo - Задача
 * @param index - Индекс задачи
 * @param openPopup - callback отвечающий за открытие Popup
 * @returns {JSX.Element}
 */
const Task: FC<ITaskProps> = ({ todo, index, openPopup }): JSX.Element => {
  const { date, id, result, plans, task } = todo;
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(deleteTask(id));
  };

  const localizationDate = getLocalizationDate(date);

  return (
    <Draggable draggableId={todo.position} key={todo.position} index={index}>
      {(provided) => (
        <li
          className={cn(style.task__wrapper)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
              icon={'edit'}
              isColored
              extraClass={style.icon}
              onClick={() => openPopup(id)}
            />
            <ButtonIcon
              icon={'trash-button'}
              isColored
              extraClass={style.icon__trash}
              onClick={handleRemove}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Task;
