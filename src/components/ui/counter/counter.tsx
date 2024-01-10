import { FC } from 'react';
import style from './counter.module.scss';
import Typography from '../typography/typography';

interface ICounter {
  title: string;
  counterTask: number;
  counterDone?: number;
  result?: boolean;
}

const Counter: FC<ICounter> = ({
  title,
  counterTask,
  counterDone,
  result,
}): JSX.Element => {
  return (
    <div className={style.counter__wrapper}>
      <Typography tag="h2" className={style.title}>
        {title}
      </Typography>
      {result ? (
        <>
          <span
            className={style.counter}
          >{`${counterTask} из ${counterDone}`}</span>
        </>
      ) : (
        <span className={style.counter}>{counterTask}</span>
      )}
    </div>
  );
};

export default Counter;
