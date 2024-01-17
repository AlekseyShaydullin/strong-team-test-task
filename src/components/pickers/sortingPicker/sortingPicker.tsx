import { FC, useEffect, useRef, useState } from 'react';

import style from './sortingPicker.module.scss';

import ButtonIconText from '../../ui/buttons/buttonIconText/buttonIconText';
import Menu from '../../menu/menu';

import { useAppDispatch } from '../../../utils/hooks/redux';
import useOutsideClickAndEscape from '../../../utils/hooks/useOutsideClickAndEscape';
import { IOptions, optionsValueSorting } from '../../../utils/types/common';

import { selectSorting } from '../../../store/reducers/tasksSlice';

import { options } from './sortingConfig';

const SortingPicker: FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);
  const [sortingType, setSortingType] = useState<string>(
    optionsValueSorting.DEFAULT
  );

  const dispatch = useAppDispatch();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOptionClick = (e: string, options: Array<IOptions>) => {
    const optionClick = options.find((option) => option.value === e);
    const sorting = optionClick!.value;

    setShowDropDown(false);
    setSortingType(sorting);
    setFilter(true);
  };

  useEffect(() => {
    dispatch(selectSorting(sortingType));

    return () => {
      dispatch(selectSorting(optionsValueSorting.DEFAULT));
    };
  }, [dispatch, sortingType]);

  const titleButton = options.find((option) => option.value === sortingType);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setShowDropDown(false);
    },
    buttonRef
  );
  return (
    <section className={style.sorter}>
      <div className={style.dropdown__wrapper}>
        <ButtonIconText
          icon="chevron"
          tag="span"
          title={titleButton!.value}
          iconClass={!showDropDown ? style.icon : style.iconOpen}
          titleClass={
            filter ? `${style.title} ${style.title_filter}` : `${style.title}`
          }
          isColored
          iconFirst
          onClick={toggleDropDown}
          ref={buttonRef}
        />
        {showDropDown && (
          <Menu
            ref={menuRef}
            options={options}
            onItemClick={(e) => handleOptionClick(e.value, options)}
            layoutClassName={style.dropdown}
            checkOption={sortingType}
            itemClassName={style.itemParent}
          />
        )}
      </div>
    </section>
  );
};

export default SortingPicker;
