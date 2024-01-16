import { forwardRef } from 'react';
import cn from 'classnames';

import style from './menu.module.scss';

import MenuItem from '../ui/menu-item/menu-item';

import { IOptions } from '../../utils/types/common';

export interface IMenu {
  /**
   * Набор полей меню, массив объектов формата `{label: string; value: string; icon?: string;}`
   */
  options: Array<IOptions>;
  /**
   * callback при клике на элемент меню
   */
  onItemClick: (option: IOptions) => void;
  /**
   * Чтобы перезаписать свойства Menu, в scss файле родителя повысьте селективность,
   * например: ```div.dropdown { padding: 10px 0;}``` */
  layoutClassName?: string;
  /** Укажите Типографику
   * Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  itemClassName?: string;
  /**
   * включить/выключить прокрутку в меню
   */
  isScroll?: boolean;
  /**
   * Выбранная опция в меню
   */
  checkOption: string;
}

type Ref = HTMLDivElement;

/**
 * Компонент для создания меню
 * @example
 * <Menu
 *   ref={menuRef}
 *   options={options}
 *   onItemClick={(e) => handleOptionClick(e.value)}
 *   layoutClassName={style.dropdown}
 *   itemClassName={style.itemParent}
 *  />
 */

const Menu = forwardRef<Ref, IMenu>(
  (
    {
      options,
      onItemClick,
      layoutClassName = '',
      itemClassName = '',
      isScroll = false,
      checkOption,
    },
    ref
  ): JSX.Element => {
    let containerCN = cn(style.box, layoutClassName);

    if (isScroll) {
      containerCN += ` ${style.scroll}`;
    }

    return (
      <div className={containerCN} ref={ref}>
        {options.map((option, index) => {
          return (
            <MenuItem
              key={index}
              option={{ ...option }}
              onClick={() => onItemClick(option)}
              extraClass={itemClassName}
              checkOption={checkOption}
            />
          );
        })}
      </div>
    );
  }
);

export default Menu;
