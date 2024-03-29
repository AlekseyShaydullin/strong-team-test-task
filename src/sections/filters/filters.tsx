import { ChangeEvent, FC } from 'react';

import style from './filters.module.scss';

import FilterPicker from '../../components/pickers/filterPicker/filterPicker';
import SortingPicker from '../../components/pickers/sortingPicker/sortingPicker';
import SearchTask from '../../components/searchTask/searchTask';

interface IFilters {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

/**
 * Компонент Filters - Отрисовывает Дропдауны для выбора сортировки и фильтрации. Так же отрисовывает инпут поиска
 * @param onChange - callback функция вызывающаяся при изменении инпута поиска
 * @param onClick - callback функция вызывающаяся при клике на кнопку сброса поиска
 * @returns {JSX.Element}
 */
const Filters: FC<IFilters> = ({ onChange, onClick }): JSX.Element => {
  return (
    <section className={style.filters__wrapper}>
      <FilterPicker />
      <div className={style.wrapper}>
        <SearchTask onChange={onChange} onClick={onClick} />
        <SortingPicker />
      </div>
    </section>
  );
};

export default Filters;
