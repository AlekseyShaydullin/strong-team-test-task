import { FC } from 'react';

import style from './radioButtons.module.scss';

import RadioButton from '../../ui/radioButton/radioButton';
import { IOptions } from '../../../utils/types/common';
import Icon from '../../ui/icon/icon';

interface IRadioButtons {
  option: IOptions;
  checked: boolean;
  changePlan: (option: string) => void;
  togglePlans: (id: string, option: string) => void;
}

/**
 * Компонент-обёртка для кнопок с иконками и текстом
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
        id={option.label}
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
