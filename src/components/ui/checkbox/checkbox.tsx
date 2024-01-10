import { FC } from 'react';
import style from './checkbox.module.scss';

interface ICheckbox {
  checked: boolean;
}

const Checkbox: FC<ICheckbox> = ({ checked, ...rest }): JSX.Element => {
  return (
    <label className={style.checkbox}>
      <input
        type="checkbox"
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
