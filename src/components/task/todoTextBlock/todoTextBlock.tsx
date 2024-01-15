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

const TodoTextBlock: FC<ITodoTextBlock> = ({
  checked,
  date,
  task,
  plans,
}): JSX.Element => {
  return (
    <div className={style.todo}>
      <div className={style.task}>
        <Icon
          name={
            plans === 'IMPORTANT'
              ? 'important'
              : plans === 'HOME'
                ? 'home'
                : 'work'
          }
          isColored
          extraClass={cn(
            style.icon,
            plans === 'IMPORTANT' ? style.important : ''
          )}
        />
        <Typography
          tag="span"
          className={cn(
            style.span,
            checked
              ? style.title__checked
              : plans === 'IMPORTANT'
                ? style.important
                : ''
          )}
        >
          {`Выполнить до ${date}`}
        </Typography>
      </div>
      <Typography
        tag="p"
        className={cn(style.title, checked ? style.title__checked : '')}
      >
        {task}
      </Typography>
    </div>
  );
};

export default TodoTextBlock;
