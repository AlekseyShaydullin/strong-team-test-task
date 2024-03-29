import { FC, useEffect, useRef, useState } from 'react';

import style from './filterPicker.module.scss';

import Menu from '../../menu/menu';
import ButtonIconText from '../../ui/buttons/buttonIconText/buttonIconText';

import { IOptions } from '../../../utils/types/common';
import { optionsValueFilter } from '../../../utils/constants';
import useOutsideClickAndEscape from '../../../utils/hooks/useOutsideClickAndEscape';
import { useAppDispatch } from '../../../utils/hooks/redux';

import { selectFilter } from '../../../store/reducers/tasksSlice';

import { options } from './filterConfig';

/**
 * Компонент FilterPicker - Отрисовывает Дропдаун отвечающий за сбор информации о фильтрации задач. И запускает фильтр
 * @returns {JSX.Element}
 */
const FilterPicker: FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);
  const [filterTypes, setFilterTypes] = useState<string>(
    optionsValueFilter.DEFAULT
  );

  const dispatch = useAppDispatch();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Переключатель Дропдауна
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  // Переключатель Кнопки "Сбросить фильтры"
  const toggleDropFilters = () => {
    setFilter(!filter);
    setFilterTypes(optionsValueFilter.DEFAULT);
    dispatch(selectFilter(optionsValueFilter.DEFAULT));
  };

  // Собираем информацию из Дропдауна
  const handleOptionClick = (e: string, options: Array<IOptions>) => {
    const optionClick = options.find((option) => option.value === e);
    const valueClick = optionClick!.value;
    setShowDropDown(false);
    setFilterTypes(valueClick);
    dispatch(selectFilter(valueClick));
    setFilter(true);
  };

  // Филтруем задачи согласно выбранному типу. И сбрасываем фильтр при обновлении страницы
  useEffect(() => {
    dispatch(selectFilter(filterTypes));
    return () => {
      dispatch(selectFilter(optionsValueFilter.DEFAULT));
    };
  }, [dispatch, filterTypes]);

  // Определям тайтл дропдауна
  const titleButton = options.find((option) => option.value === filterTypes);

  // Хук отвечающий за закрытие дропдауна
  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setShowDropDown(false);
    },
    buttonRef
  );

  return (
    <section className={style.filter}>
      <ButtonIconText
        icon="chevron"
        tag="span"
        title={titleButton!.value}
        iconClass={!showDropDown ? style.icon : style.iconOpen}
        titleClass={
          filter ? `${style.title} ${style.title_filter}` : `${style.title}`
        }
        isColored
        iconFirst={false}
        onClick={toggleDropDown}
        ref={buttonRef}
      />
      {showDropDown && (
        <Menu
          ref={menuRef}
          options={options}
          onItemClick={(e) => handleOptionClick(e.value, options)}
          layoutClassName={style.dropdown}
          checkOption={filterTypes}
          itemClassName={style.itemParent}
        />
      )}
      {filter && (
        <ButtonIconText
          icon={'close'}
          tag={'span'}
          title={'Сбросить фильтры'}
          isColored
          buttonClass={style.closeButton}
          iconClass={style.icon}
          titleClass={style.title}
          iconFirst={false}
          onClick={toggleDropFilters}
        />
      )}
    </section>
  );
};

export default FilterPicker;
