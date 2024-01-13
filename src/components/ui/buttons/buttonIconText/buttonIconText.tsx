import { forwardRef } from 'react';
import cn from 'classnames';

import style from './buttonIconText.module.scss';

import Icon from '../../icon/icon';
import Typography from '../../typography/typography';

interface IButtonIconText {
  /**
   * Укажите название файла иконки, без его расширения
   */
  icon: string;
  /**
   * Укажите тег title: 'h1' | 'h2' | 'p' | 'span'
   */
  tag: 'h1' | 'h2' | 'p' | 'span';
  /**
   * Укажите название кнопки
   * */
  title: string;
  /**
   * Если иконка монохромная укажите значение true
   * */
  isColored: boolean;
  /**
   * Cтилизация самой кнопки: цвет, размер, дополнительные анимации
   * */
  buttonClass?: string;
  /** Cтилизация иконки: цвет, размер, дополнительные анимации */
  iconClass?: string;
  /**
   * Cтилизация текста: цвет, размер, ховеры
   * */
  titleClass?: string;
  /**
   * Можно управлять стилизацией. Иконка первая? тогда пиши true
   * */
  iconFirst: boolean;
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
 * Компонент-обёртка для кнопок с иконками и текстом
 * @example
 * <ButtonIconText
 *    icon="chevron"
 *    tag="h2"
 *    title="Название кнопки"
 *    isColored={true}
 *    buttonClass={style.button}
 *    iconClass={style.icon}
 *    titleClass={style.title}
 *    iconFirst={true}
 *    onClick={onClick}
 *    id={id}
 * />
 */

const ButtonIconText = forwardRef<Ref, IButtonIconText>(
  (
    {
      icon,
      tag,
      title,
      buttonClass,
      iconClass,
      titleClass,
      isColored,
      iconFirst,
      onClick,
      id,
    },
    ref
  ): JSX.Element => {
    return (
      <button
        className={cn(style[`button`], buttonClass)}
        onClick={onClick}
        ref={ref}
        id={id}
      >
        {!iconFirst && (
          <Typography tag={tag} className={titleClass}>
            {title}
          </Typography>
        )}
        <Icon name={icon} isColored={isColored} extraClass={iconClass} />
        {iconFirst && (
          <Typography tag={tag} className={titleClass}>
            {title}
          </Typography>
        )}
      </button>
    );
  }
);

export default ButtonIconText;
