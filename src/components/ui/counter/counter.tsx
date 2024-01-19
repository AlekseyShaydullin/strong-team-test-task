import { FC } from 'react';
import style from './counter.module.scss';
import Typography from '../typography/typography';

interface ICounter {
  /**
   * Тайтл счётчика
   */
  title: string;
  /**
   * Количество задач
   */
  counterTask: number;
  /**
   * Количество выполненых задач
   */
  counterResult?: number;
  /**
   * Опциональный флаг. Определяет, показывает компонент сравнительный результат или нет
   */
  result?: boolean;
}

/**
 * Компонент-обёртка для счётчика задач
 * @example
 * <Counter
 *   title={'Всего задач:'}
 *   counterTask={counterTask}
 *   counterResult={counterResult}
 *   result
 * />
 */
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
