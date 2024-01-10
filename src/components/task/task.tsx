import { FC, useState } from 'react';
import style from './task.module.scss';
import Typography from '../ui/typography/typography';
import Checkbox from '../ui/checkbox/checkbox';
import ButtonIcon from '../ui/buttons/buttonIcon/buttonIcon';

const Task: FC = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckBox = () => {
    setChecked(!checked);
  };

  return (
    <li className={style.task__wrapper} onClick={handleCheckBox}>
      <Checkbox checked={checked} />
      <Typography tag="p" className={style.title}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Typography>
      <ButtonIcon
        icon="trash"
        isColored
        extraClass={style.icon}
        // onClick={onClick}
      />
    </li>
  );
};

export default Task;
