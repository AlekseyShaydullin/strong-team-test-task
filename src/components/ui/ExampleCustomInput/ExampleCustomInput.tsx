import { forwardRef } from 'react';

import style from './ExampleCustomInput.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

import { getCorrectDate } from '../../../utils/helpers/getCorrectDate';

interface IExampleCustomInput {
  value: string;
  onClick: () => void;
}

type Ref = HTMLButtonElement;

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
