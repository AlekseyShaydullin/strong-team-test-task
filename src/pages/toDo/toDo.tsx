import { FC } from 'react';
import Header from '../../sections/header/header';
import Body from '../../sections/body/body';

/**
 * Компонент ToDoPage - Страница ToDo
 * @returns {JSX.Element}
 */
const ToDoPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default ToDoPage;
