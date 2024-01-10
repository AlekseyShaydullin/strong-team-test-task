import { FC } from 'react';
import style from './header.module.scss';
import Icon from '../../components/ui/icon/icon';
import Typography from '../../components/ui/typography/typography';

const Header: FC = (): JSX.Element => {
  return (
    <header className={style.header}>
      <Icon name="rocket" isColored={false} extraClass={style.icon} />
      <div className={style.title__wrapper}>
        <Typography tag="h1" className={style.titleOne}>
          to
        </Typography>
        <Typography tag="h1" className={style.titleTwo}>
          do
        </Typography>
      </div>
    </header>
  );
};

export default Header;
