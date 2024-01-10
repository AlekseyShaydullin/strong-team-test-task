import { FC } from 'react';

import style from './body.module.scss';

import Form from '../../components/form/form';
import Tasks from '../tasks/tasks';

const Body: FC = (): JSX.Element => {
  return (
    <main className={style.main}>
      <Form />
      <Tasks />
    </main>
  );
};

export default Body;
