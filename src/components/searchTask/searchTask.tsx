import { ChangeEvent, FC } from 'react';

import style from './searchTask.module.scss';
import Icon from '../ui/icon/icon';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';

interface ISearchTask {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

/**
 * Компонент-обёртка для формы поиска
 * @example
 * <SearchTask
 *  onChange={onChange}
 *  onClick={onClick}
 * />
 **/
const SearchTask: FC<ISearchTask> = ({ onChange, onClick }): JSX.Element => {
  return (
    <form className={style.search__form}>
      <Icon name="search" isColored extraClass={style.iconSearch} />
      <input
        className={style.input}
        type="text"
        placeholder="Найти задачу..."
        onChange={onChange}
      />
      <ButtonIcon
        icon="close"
        isColored
        extraClass={style.iconClose}
        onClick={onClick}
      />
    </form>
  );
};

export default SearchTask;
