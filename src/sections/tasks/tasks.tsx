import { FC } from 'react';
import style from './tasks.module.scss';
import Counters from '../../components/counters/counters';
import Task from '../../components/task/task';
import Empty from '../../components/empty/empty';
import { useAppSelector } from '../../utils/hooks/redux';
import { selectState } from '../../store/reducers/tasksSlice';

const Tasks: FC = (): JSX.Element => {
  const { tasks } = useAppSelector(selectState);
  const { counter } = useAppSelector(selectState);

  console.log(tasks);
  console.log(counter);

  return (
    <section className={style.tasks}>
      <Counters counterTask={tasks.length} counterResult={counter} />
      <div className={style.wrapperTasks}>
        {tasks.length !== 0 ? (
          tasks
            .map((task) => {
              return (
                <ul key={task.id}>
                  <Task {...task} />
                </ul>
              );
            })
            .reverse()
        ) : (
          <Empty />
        )}
      </div>
    </section>
  );
};

export default Tasks;
