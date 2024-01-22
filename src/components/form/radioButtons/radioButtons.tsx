import { FC } from 'react';

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
   * callback функция соберющая информациию о выбранной категории задачи
   * @param option - Опция радио кнопки
   * @returns {void}
   */
  changePlan: (option: string) => void;
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
  changePlan,
}): JSX.Element => {
  return (
    <div className={style.wrapperRadio}>
      <RadioButton
        label={option.value}
        option={option.label}
        wrapperClass={`${style.wrapperRadio} ${style.wrapperRadio_color}`}
        radioClass={style.radioClass}
        labelClass={style.labelClass}
        onClick={changePlan}
        id={option.label}
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
