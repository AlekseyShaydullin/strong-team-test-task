import { FC } from 'react';
import style from './counters.module.scss';
import Counter from '../ui/counter/counter';

interface ICounters {
  counterTask: number;
  counterResult: number;
}

const Counters: FC<ICounters> = ({
  counterTask,
  counterResult,
}): JSX.Element => {
  return (
    <div className={style.counters__wrapper}>
      <Counter title={'Всего задач:'} counterTask={counterTask} />
      <Counter
        title={'Выполненно задач:'}
        counterTask={counterTask}
        counterResult={counterResult}
        result
      />
    </div>
  );
};

export default Counters;
