import { FC } from 'react';
import cn from 'classnames';

import style from './todoTextBlock.module.scss';

import Typography from '../../ui/typography/typography';
import Icon from '../../ui/icon/icon';

interface ITodoTextBlock {
  checked: boolean;
  date: string;
  task: string;
  plans: string;
}

/**
 * Компонент TodoTextBlock - Отвечает за отрисовку контента таски
 * @param date - Дата к которой необходимо выполнить задачу
 * @param task - Текст задачи
 * @param plans - Категория задачи
 * @param checked - Состояние показывающее выполненна таска или нет
 * @returns {JSX.Element}
 */
const TodoTextBlock: FC<ITodoTextBlock> = ({
  date,
  task,
  plans,
  checked,
}): JSX.Element => {
  return (
    <div className={style.todo}>
      <div className={style.task}>
        <Icon
          name={
            plans === 'IMPORTANT' || plans === 'IMPORTANTMODAL'
              ? 'important'
              : plans === 'HOME' || plans === 'HOMEMODAL'
                ? 'home'
                : 'work'
          }
          isColored
          extraClass={cn(
            style.icon,
            plans === 'IMPORTANT' || plans === 'IMPORTANTMODAL'
              ? style.important
              : ''
          )}
        />
        <Typography
          tag={'span'}
          className={cn(
            style.span,
            checked
              ? style.title__checked
              : plans === 'IMPORTANT' || plans === 'IMPORTANTMODAL'
                ? style.important
                : ''
          )}
        >
          {`Выполнить до ${date}`}
        </Typography>
      </div>
      <Typography
        tag={'p'}
        className={cn(style.title, checked ? style.title__checked : '')}
      >
        {task}
      </Typography>
    </div>
  );
};

export default TodoTextBlock;
