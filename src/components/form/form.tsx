import { ChangeEvent, FC, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import style from './form.module.scss';

import { addTask } from '../../store/reducers/tasksSlice';

import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';
import DatePickerTodo from '../ui/datePickerTodo/datePickerTodo';

import { useAppDispatch } from '../../utils/hooks/redux';
import { getConvertDate } from '../../utils/helpers/getConvertDate';

const Form: FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const dispatch = useAppDispatch();

  const getTextTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(e.target.value);
  };

  const date = getConvertDate(startDate);

  const saveTask = () => {
    if (todo.trim().length) {
      dispatch(addTask({ todo, date }));
      setTodo('');
    }
  };

  return (
    <section className={style.formWrapper}>
      <label className={style.label}>
        <TextareaAutosize
          className={style.textarea}
          value={todo}
          placeholder={'Добавить новую задачу'}
          maxRows={1}
          onChange={(e) => getTextTask(e)}
          name="task"
        />
        <DatePickerTodo startDate={startDate} setStartDate={setStartDate} />
        <ButtonIconText
          icon="plus"
          tag="p"
          title="Создать"
          isColored
          buttonClass={style.button}
          iconClass={style.icon}
          titleClass={style.title}
          iconFirst={false}
          onClick={saveTask}
        />
      </label>
    </section>
  );
};

export default Form;
