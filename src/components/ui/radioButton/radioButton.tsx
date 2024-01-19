import { FC } from 'react';
import cn from 'classnames';

import style from './radioButton.module.scss';

interface IRadioButton {
  /**
   * Название кнопки
   */
  label: string;
  /**
   * Список опций
   */
  option: string;
  /**
   * Можно стилизовать обёртку
   */
  wrapperClass?: string;
  /**
   * Можно стилизовать радио кнопку
   */
  radioClass?: string;
  /**
   * Можно стилизовать лэйбл радио кнопки
   */
  labelClass?: string;
  /**
   * Состояние радио кнопки
   */
  checked: boolean;
  /**
   * callback при клике на радио кнопку
   */
  onClick: (option: string) => void;
  /**
   * callback при изменении состояния радио кнопки
   */
  onChange: (id: string, option: string) => void;
  /**
   * id радио кнопки
   */
  id: string;
}

/**
 * Компонент-обёртка для радио кнопки
 * @example
 * <RadioButton
 *    label="Название кнопки"
 *    option={option}
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
