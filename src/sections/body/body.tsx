import { ChangeEvent, FC, useState } from 'react';

import style from './body.module.scss';

import Tasks from '../tasks/tasks';
import Form from '../../components/form/form';
import { optionsRadioButtons } from '../../components/form/radioButtonsConfig';

import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';
import { addTask, selectState } from '../../store/reducers/tasksSlice';

import { optionsLabel } from '../../utils/types/common';
import { getConvertDate } from '../../utils/helpers/getConvertDate';

const Body: FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [plans, setPlans] = useState<string>(optionsLabel.WORK);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { counterPosition } = useAppSelector(selectState);

  const dispatch = useAppDispatch();
  const date = getConvertDate(startDate);

  const getTextTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(e.target.value);
  };

  console.log(counterPosition);

  const saveTask = () => {
    if (todo.trim().length) {
      dispatch(addTask({ todo, date, plans, counterPosition }));
      setTodo('');
      setPlans(optionsLabel.WORK);
      setStartDate(new Date());
    }
  };

  const changePlan = (option: string) => {
    setPlans(option);
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
