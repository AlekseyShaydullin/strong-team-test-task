import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import style from './form.module.scss';

import DatePickerTodo from '../pickers/datePickerTodo/datePickerTodo';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

import RadioButtons from './radioButtons/radioButtons';
import { IOptionsRadioButtons } from './radioButtonsConfig';

interface IForm {
  valueForm: string;
  placeholder: string;
  startDate: Date;
  iconButton: string;
  titleButton: string;
  options: Array<IOptionsRadioButtons>;
  getTextTask: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  setStartDate: Dispatch<SetStateAction<Date>>;
  saveTask: () => void;
  changePlan: (option: string) => void;
}

const Form: FC<IForm> = ({
  valueForm,
  placeholder,
  startDate,
  iconButton,
  titleButton,
  options,
  getTextTask,
  setStartDate,
  saveTask,
  changePlan,
}): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  const togglePlans = (id: string, label: string) => {
    if (id === label) {
      setChecked(!checked);
    }
    return;
  };

  return (
    <section className={style.formWrapper}>
      <label className={style.label} htmlFor="textarea">
        <TextareaAutosize
          className={style.textarea}
          value={valueForm}
          placeholder={placeholder}
          maxRows={1}
          onChange={(e) => getTextTask(e)}
          id="textarea"
        />
        <DatePickerTodo startDate={startDate} setStartDate={setStartDate} />
        <ButtonIconText
          icon={iconButton}
          tag="p"
          title={titleButton}
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
