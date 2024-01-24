import { Dispatch, FC, SetStateAction } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import ExampleCustomInput from '../../ui/ExampleCustomInput/ExampleCustomInput';

interface iProps {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
}

/**
 * Библиточный компонент DatePickerTodo - Задает дату
 * @param startDate - Сегоднешнее число
 * @param setStartDate - Экшен для сохранения выбранной даты
 * @returns {JSX.Element}
 */
const DatePickerTodo: FC<iProps> = ({
  startDate,
  setStartDate,
}): JSX.Element => {
  registerLocale('ru', ru);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      locale={'ru'}
      customInput={
        <ExampleCustomInput
          value={''}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      }
    />
  );
};

export default DatePickerTodo;
