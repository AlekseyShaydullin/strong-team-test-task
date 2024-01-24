import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import style from './form.module.scss';

import DatePickerTodo from '../pickers/datePickerTodo/datePickerTodo';
import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

import RadioButtons from './radioButtons/radioButtons';
import { IOptionsRadioButtons } from './radioButtonsConfig';
import { IOptionsRadioButtonsModal } from '../modals/modal-change-task/optionsRadioButtonsModal';

interface IForm {
  valueForm: string;
  placeholder: string;
  startDate: Date;
  iconButton: string;
  titleButton: string;
  options: Array<IOptionsRadioButtons> | Array<IOptionsRadioButtonsModal>;
  getTextTask: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  setStartDate: Dispatch<SetStateAction<Date>>;
  saveTask: () => void;
  changePlan: (option: string) => void;
}

/**
 * Универсальный компонет Form
 * @param valueForm - value Формы
 * @param placeholder - value Placeholder
 * @param startDate - Сегодняшняя дата
 * @param iconButton - Название иконки кнопки
 * @param titleButton - Название кнопки
 * @param options - Опции радио кнопок
 * @param getTextTask - callback функция для получения текста задачи
 * @param setStartDate - Экшен для получения выбранной даты
 * @param saveTask - callback функция сохроняющая изменения задачи
 * @param changePlan - callback функция отвечающа за сохраниение выбранной категории задачи
 * @returns {JSX.Element}
 */
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
  return (
    <section className={style.formWrapper}>
      <label className={style.label} htmlFor={'textarea'}>
        <TextareaAutosize
          className={style.textarea}
          value={valueForm}
          placeholder={placeholder}
          maxRows={1}
          onChange={(e) => getTextTask(e)}
          id={'textarea'}
        />
        <DatePickerTodo startDate={startDate} setStartDate={setStartDate} />
        <ButtonIconText
          icon={iconButton}
          tag={'p'}
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
                changePlan={changePlan}
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
