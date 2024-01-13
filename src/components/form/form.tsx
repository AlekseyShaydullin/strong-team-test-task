import { ChangeEvent, FC, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import style from './form.module.scss';

import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';
import { useAppDispatch } from '../../utils/hooks/redux';
import { addTask } from '../../store/reducers/tasksSlice';

const Form: FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const dispatch = useAppDispatch();

  const getTextTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(e.target.value);
  };

  const saveTask = () => {
    if (todo.trim().length) {
      dispatch(addTask(todo));
      setTodo('');
    }
  };

  return (
    <section className={style.formWrapper}>
      <label className={style.label}>
        <TextareaAutosize
          className={style.textarea}
          value={todo}
          placeholder={'Добавить новую задачу'}
          onChange={(e) => getTextTask(e)}
          name="task"
        />
        <ButtonIconText
          icon="plus"
          tag="p"
          title="Создать"
          isColored
          buttonClass={style.button}
          iconClass={style.icon}
          titleClass={style.title}
          iconFirst={false}
          onClick={saveTask}
        />
      </label>
    </section>
  );
};

export default Form;
