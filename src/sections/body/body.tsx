import { ChangeEvent, FC, useState } from 'react';

import style from './body.module.scss';

import Tasks from '../tasks/tasks';
import Form from '../../components/form/form';
import { optionsRadioButtons } from '../../components/form/radioButtonsConfig';

import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';
import { addTask, selectState } from '../../store/reducers/tasksSlice';

import { getConvertDate } from '../../utils/helpers/getConvertDate';
import { optionsLabel } from '../../utils/constants';

/**
 * Компонент Body - Отрисовывает тело приложения
 * @returns {JSX.Elemen}
 */
const Body: FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [plans, setPlans] = useState<string>(optionsLabel.WORK);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { counterPosition } = useAppSelector(selectState);

  const dispatch = useAppDispatch();

  const date = getConvertDate(startDate);

  // Получаем текст задачи
  const getTextTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(e.target.value);
  };

  // Получаем категорию задачи
  const changePlan = (option: string) => {
    setPlans(option);
  };

  // Сохроняем Задачу в стор
  const saveTask = () => {
    if (todo.trim().length) {
      dispatch(addTask({ todo, date, plans, counterPosition }));
      setTodo('');
      setPlans(optionsLabel.WORK);
      setStartDate(new Date());
    }
  };

  return (
    <main className={style.main}>
      <Form
        valueForm={todo}
        placeholder={'Добавить новую задачу'}
        startDate={startDate}
        iconButton={'plus'}
        titleButton={'Создать'}
        options={optionsRadioButtons}
        getTextTask={getTextTask}
        setStartDate={setStartDate}
        saveTask={saveTask}
        changePlan={changePlan}
      />
      <Tasks />
    </main>
  );
};

export default Body;
