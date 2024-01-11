import { FC } from 'react';
import style from './counter.module.scss';
import Typography from '../typography/typography';

interface ICounter {
  title: string;
  counterTask: number;
  counterResult?: number;
  result?: boolean;
}

const Counter: FC<ICounter> = ({
  title,
  counterTask,
  counterResult,
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
          >{`${counterResult} из ${counterTask}`}</span>
        </>
      ) : (
        <span className={style.counter}>{counterTask}</span>
      )}
    </div>
  );
};

export default Counter;
