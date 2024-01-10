import { FC } from 'react';
import style from './tasks.module.scss';
import Counters from '../../components/counters/counters';
import Task from '../../components/task/task';
import Empty from '../../components/empty/empty';

const Tasks: FC = (): JSX.Element => {
  return (
    <section className={style.tasks}>
      <Counters />
      <Task />
      <Empty />
    </section>
  );
};

export default Tasks;
