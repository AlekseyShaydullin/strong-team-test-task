import { FC } from 'react';
import cn from 'classnames';

import style from './task.module.scss';
import Typography from '../ui/typography/typography';
import Checkbox from '../ui/checkbox/checkbox';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';
import { ITask } from '../../models/ITask';
import { useAppDispatch } from '../../utils/hooks/redux';
import { deleteTask } from '../../store/reducers/tasksSlice';
import { getLocalizationDate } from '../../utils/helpers/getLocalizationDate';

const Task: FC<ITask> = ({ id, task, result, date }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(deleteTask(id));
  };

  const localizationDate = getLocalizationDate(date);

  console.log(localizationDate);

  return (
    <li className={style.task__wrapper}>
      <Checkbox checked={result} id={id} />
      <div className={style.todo}>
        <Typography
          tag="p"
          className={cn(style.title, result ? style.title__checked : '')}
        >
          {task}
        </Typography>
        <Typography
          tag="span"
          className={cn(style.span, result ? style.title__checked : '')}
        >
          {`Выполнить до ${localizationDate}`}
        </Typography>
      </div>

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
