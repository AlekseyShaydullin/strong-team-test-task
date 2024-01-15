import { FC } from 'react';

import style from './task.module.scss';

import Checkbox from '../ui/checkbox/checkbox';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';

import { ITask } from '../../models/ITask';

import { useAppDispatch } from '../../utils/hooks/redux';
import { getLocalizationDate } from '../../utils/helpers/getLocalizationDate';

import { deleteTask } from '../../store/reducers/tasksSlice';
import TodoTextBlock from './todoTextBlock/todoTextBlock';

const Task: FC<ITask> = ({ id, task, result, date, plans }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(deleteTask(id));
  };

  const localizationDate = getLocalizationDate(date);

  return (
    <li className={style.task__wrapper}>
      <Checkbox checked={result} id={id} />
      <TodoTextBlock
        checked={result}
        date={localizationDate}
        task={task}
        plans={plans}
      />
      <ButtonIcon
        icon="trash"
        isColored
        extraClass={style.icon}
        onClick={handleRemove}
      />
    </li>
  );
};

export default Task;
