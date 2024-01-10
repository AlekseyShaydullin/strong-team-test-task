import { forwardRef } from 'react';
import cn from 'classnames';

import style from './buttonIcon.module.scss';

import Icon from '../../icon/icon';

interface IButtonIcon {
  /**
   * Укажите название файла иконки, без его расширения
   */
  icon: string;
  /**
   * Если иконка монохромная укажите значение true
   * */
  isColored: boolean;
  /**
   * Cтилизация иконки: цвет, размер, дополнительные анимации
   * */
  extraClass?: string;
  /**
   * Cтилизация кнопки
   * */
  buttonClass?: string;
  /**
   * callback при клике на кнопку
   */
  onClick?: () => void;
  /**
   * ID кнопки
   */
  id?: string;
}

type Ref = HTMLButtonElement;

/**
 * Компонент-обёртка для кнопок с иконками без текста
 * @example
 * <ButtonIcon
 *    icon="chevron"
 *    isColored={true}
 *    extraClass={style.icon}
 *    buttonClass={style.button}
 *    onClick={onClick}
 * />
 */
const ButtonIcon = forwardRef<Ref, IButtonIcon>(
  (
    { icon, extraClass, isColored, buttonClass = '', onClick, id },
    ref
  ): JSX.Element => {
    return (
      <button
        className={cn(style.button, buttonClass)}
        onClick={onClick}
        ref={ref}
        id={id}
      >
        <Icon name={icon} extraClass={extraClass} isColored={isColored} />
      </button>
    );
  }
);

export default ButtonIcon;
