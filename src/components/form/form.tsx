import { ChangeEvent, FC, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import style from './form.module.scss';

import { addTask } from '../../store/reducers/tasksSlice';

import DatePickerTodo from '../datePickerTodo/datePickerTodo';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

import { useAppDispatch } from '../../utils/hooks/redux';
import { getConvertDate } from '../../utils/helpers/getConvertDate';
import { optionsLabel, optionsValue } from '../../utils/types/common';
import RadioButtons from './radioButtons/radioButtons';

const Form: FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [plans, setPlans] = useState<string>(optionsLabel.WORK);
  const [checked, setChecked] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const getTextTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(e.target.value);
  };

  const date = getConvertDate(startDate);

  const options = [
    { label: optionsLabel.IMPORTANT, value: optionsValue.IMPORTANT },
    { label: optionsLabel.HOME, value: optionsValue.HOME },
    { label: optionsLabel.WORK, value: optionsValue.WORK },
  ];

  const togglePlans = (id: string, label: string) => {
    if (id === label) {
      setChecked(!checked);
    }
    return;
  };

  const changePlan = (option: string) => {
    setPlans(option);
  };

  const saveTask = () => {
    if (todo.trim().length) {
      dispatch(addTask({ todo, date, plans }));
      setTodo('');
      setPlans(optionsLabel.WORK);
    }
  };

  return (
    <section className={style.formWrapper}>
      <label className={style.label} htmlFor="textarea">
        <TextareaAutosize
          className={style.textarea}
          value={todo}
          placeholder={'Добавить новую задачу'}
          maxRows={1}
          onChange={(e) => getTextTask(e)}
          id="textarea"
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
      <div className={style.radioButtons}>
        <div className={style.labelPlans}>
          {options.map((option, index) => {
            return (
              <RadioButtons
                option={option}
                checked={checked}
                changePlan={changePlan}
                togglePlans={togglePlans}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Form;
