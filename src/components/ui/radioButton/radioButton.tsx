import { FC } from 'react';
import cn from 'classnames';

import style from './radioButton.module.scss';

interface IRadioButton {
  label: string;
  option: string;
  wrapperClass?: string;
  radioClass?: string;
  labelClass?: string;
  checked: boolean;
  onClick: (option: string) => void;
  onChange: (id: string, option: string) => void;
  id: string;
}

/**
 * Компонент-обёртка для радио кнопки
 * @example
 * <RadioButton
 *    label="Название кнопки"
 *    wrapperClass={style.wrapperRadio}
 *    radioClass={style.radioClass}
 *    labelClass={style.labelClass}
 *    checked={checked}
 *    onChange={onChange}
 *    id={id}
 * />
 */
const RadioButton: FC<IRadioButton> = ({
  label,
  option,
  wrapperClass,
  radioClass,
  labelClass,
  checked,
  onClick,
  onChange,
  id,
  ...rest
}) => {
  return (
    <div
      className={cn(style[`wrapper`], wrapperClass)}
      onClick={() => onClick(option)}
    >
      <input
        type="radio"
        name="radio"
        id={id}
        className={cn(style[`radio`], radioClass)}
        checked={checked}
        onChange={() => onChange(id, option)}
        {...rest}
      />
      <label htmlFor={id} className={cn(style[`label`], labelClass)}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
