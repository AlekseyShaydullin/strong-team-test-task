import { FC } from 'react';

import style from './checkbox.module.scss';
import { useAppDispatch } from '../../../utils/hooks/redux';
import { addResultTask } from '../../../store/reducers/tasksSlice';

interface ICheckbox {
  /**
   * Состояние чекбокса
   */
  checked: boolean;
  /**
   * id чекбокса
   */
  id: string;
}

/**
 * UI Компонент - Checkbox
 * @example
 * <Checkbox
 *   checked={checked}
 *   id={id}
 * />
 */
const Checkbox: FC<ICheckbox> = ({ checked, id, ...rest }): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <label className={style.checkbox}>
      <input
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={() => dispatch(addResultTask(id))}
        className={
          checked === true ? style.customСheckboxDone : style.customСheckbox
        }
        {...rest}
      />
      <span className={style.cust} />
    </label>
  );
};

export default Checkbox;
