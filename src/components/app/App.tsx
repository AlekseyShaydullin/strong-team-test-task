// import { useState } from 'react';
import Task from '../task/task';
import Form from '../form/form';
import './App.css';
import Counters from '../counters/counters';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <Counters />
      <Task />
    </>
  );
}

export default App;
