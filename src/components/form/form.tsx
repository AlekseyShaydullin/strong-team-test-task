import { FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import style from './form.module.scss';

import ButtonIconText from '../ui/buttons/buttonIconText/buttonIconText';

const Form: FC = (): JSX.Element => {
  return (
    <form className={style.form}>
      <TextareaAutosize
        className={style.textarea}
        placeholder={'Добавить новую задачу'}
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
        // onClick={onClick}
        // id={id}
      />
    </form>
  );
};

export default Form;
