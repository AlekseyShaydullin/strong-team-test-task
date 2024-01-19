import { FC } from 'react';
import { v4 as uuid4 } from 'uuid';

import style from './radioButtons.module.scss';

import RadioButton from '../../ui/radioButton/radioButton';
import { IOptions } from '../../../utils/types/common';
import Icon from '../../ui/icon/icon';

interface IRadioButtons {
  /**
   * Опции радио кнопок
   */
  option: IOptions;
  /**
   * Состояние показывающее выбор радио кнопки
   */
  checked: boolean;
  /**
   * callback функция соберющая информациию о выбранной категории задачи
   * @param option - Опция радио кнопки
   * @returns {void}
   */
  changePlan: (option: string) => void;
  /**
   * callback функция изменяющее состояние выбранной радио кнопки
   * @param id - id радио кнопки
   * @param option - Опция радио кнопки
   * @returns {void}
   */
  togglePlans: (id: string, option: string) => void;
}

/**
 * Компонент-обёртка для радио кнопок с иконками и текстом
 * @example
 * <RadioButtons
 *  option={option}
 *  checked={checked}
 *  changePlan={changePlan}
 *  togglePlans={togglePlans}
 * />
 */
const RadioButtons: FC<IRadioButtons> = ({
  option,
  checked,
  changePlan,
  togglePlans,
}): JSX.Element => {
  return (
    <div className={style.wrapperRadio}>
      <RadioButton
        label={option.value}
        option={option.label}
        wrapperClass={`${style.wrapperRadio} ${style.wrapperRadio_color}`}
        radioClass={style.radioClass}
        labelClass={style.labelClass}
        checked={checked}
        onClick={changePlan}
        onChange={togglePlans}
        id={uuid4()}
        key={option.label}
      />
      <Icon
        name={
          option.label === 'IMPORTANT'
            ? 'important'
            : option.label === 'HOME'
              ? 'home'
              : 'work'
        }
        isColored
        extraClass={style.icon}
      />
    </div>
  );
};

export default RadioButtons;
