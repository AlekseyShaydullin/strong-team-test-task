import { FC } from 'react';

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
  openPopup: (id: string) => void;
}

const Task: FC<ITaskProps> = ({ tasks, openPopup }): JSX.Element => {
  const { date, id, result, plans, task } = tasks;
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
