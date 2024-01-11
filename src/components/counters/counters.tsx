import { FC } from 'react';
import style from './counters.module.scss';
import Counter from '../ui/counter/counter';

const Counters: FC = (): JSX.Element => {
  return (
    <div className={style.counters__wrapper}>
      <Counter title={'Активные задачи:'} counterTask={1} />
      <Counter
        title={'Выполненно задач:'}
        counterTask={1}
        counterResult={1}
        result
      />
    </div>
  );
};

export default Counters;
