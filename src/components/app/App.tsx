// import { useState } from 'react';
import Task from '../task/task';
import Form from '../form/form';
import './App.css';
import Counters from '../counters/counters';
import Empty from '../empty/empty';
import Header from '../../sections/header/header';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Form />
      <Counters />
      <Task />
      <Empty />
    </>
  );
}

export default App;
