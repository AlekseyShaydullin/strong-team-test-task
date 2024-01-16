import { FC } from 'react';

import style from './filters.module.scss';

import FilterPicker from '../../components/filterPicker/filterPicker';
import SortingPicker from '../../components/sortingPicker/sortingPicker';

const Filters: FC = (): JSX.Element => {
  return (
    <section className={style.filters__wrapper}>
      <FilterPicker />
      <SortingPicker />
    </section>
  );
};

export default Filters;
