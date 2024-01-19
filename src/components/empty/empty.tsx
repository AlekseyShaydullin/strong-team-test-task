import { FC } from 'react';
import style from './empty.module.scss';
import Icon from '../ui/icon/icon';
import Typography from '../ui/typography/typography';

/**
 * Компонент Empty - Отрисовывается, когда нет задачь в туду листе
 * @returns {JSX.Element}
 */
const Empty: FC = (): JSX.Element => {
  return (
    <div className={style.empty__wrapper}>
      <Icon name="clipboard" isColored extraClass={style.icon} />
      <div className={style.title__wrapper}>
        <Typography tag="span" className={style.title}>
          У вас еще нет зарегистрированных задач
        </Typography>
        <Typography tag="span">
          Создавайте задачи и организуйте свои дела
        </Typography>
      </div>
    </div>
  );
};

export default Empty;
