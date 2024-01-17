import { ChangeEvent, FC, useState } from 'react';

import style from './modal-change-task.module.scss';

import ModalPopup from '../modal-popup/modal-popup';
import Form from '../../form/form';
import Icon from '../../ui/icon/icon';
import Typography from '../../ui/typography/typography';

import { optionsRadioButtons } from '../../form/radioButtonsConfig';

import { getConvertDate } from '../../../utils/helpers/getConvertDate';
import { ITask } from '../../../models/ITask';

import { useAppDispatch } from '../../../utils/hooks/redux';
import { changeTask } from '../../../store/reducers/tasksSlice';

interface IModalChangeTask {
  task: ITask;
  closeModal: () => void;
}

const ModalChangeTask: FC<IModalChangeTask> = ({ task, closeModal }) => {
  const [todo, setTodo] = useState<string>(task.task);
  const [plans, setPlans] = useState<string>(task.plans);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const id = task.id;

  const dispatch = useAppDispatch();
  const date = getConvertDate(startDate);

  const getTextTask = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodo(e.target.value);
  };

  const saveTask = () => {
    if (todo.trim().length) {
      closeModal();
      dispatch(changeTask({ todo, date, plans, id }));
      setTodo('');
    }
  };

  const changePlan = (option: string) => {
    setPlans(option);
  };

  return (
    <ModalPopup onClick={closeModal}>
      <div className={style.wrapper}>
        <div className={style.headerPopup}>
          <Icon name="rocket" isColored={false} extraClass={style.icon} />
          <div className={style.title__wrapper}>
            <Typography tag="h1" className={style.titleOne}>
              {'Измените'}
            </Typography>
            <Typography tag="h1" className={style.titleTwo}>
              {'задачу:'}
            </Typography>
          </div>
        </div>
        <div className={style.formPopup}>
          <Form
            valueForm={todo}
            placeholder={'Изменить задачу'}
            startDate={startDate}
            iconButton={'plus'}
            titleButton={'Сохранить'}
            options={optionsRadioButtons}
            getTextTask={getTextTask}
            setStartDate={setStartDate}
            saveTask={saveTask}
            changePlan={changePlan}
          />
        </div>
      </div>
    </ModalPopup>
  );
};

export default ModalChangeTask;
