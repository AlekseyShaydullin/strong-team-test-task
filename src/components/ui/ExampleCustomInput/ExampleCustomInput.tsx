import { forwardRef } from 'react';

import style from './ExampleCustomInput.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

import { getCorrectDate } from '../../../utils/helpers/getCorrectDate';

interface IExampleCustomInput {
  /**
   * Дата
   */
  value: string;
  /**
   * callback при клике на кнопку
   */
  onClick: () => void;
}

type Ref = HTMLButtonElement;

/**
 * Компонент-кастомная кнопка для DatePicker
 * @example
 * <ButtonIconText
 *    value={''}
 *    onClick={onClick}
 * />
 */
const ExampleCustomInput = forwardRef<Ref, IExampleCustomInput>(
  ({ value, onClick }, ref) => {
    const date = getCorrectDate(value);

    return (
      <button className={style.customInput} onClick={onClick} ref={ref}>
        {`До: ${date}`}
      </button>
    );
  }
);

export default ExampleCustomInput;
