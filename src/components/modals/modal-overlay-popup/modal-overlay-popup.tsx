import { FC, MouseEvent } from 'react';

import style from './modal-overlay-popup.module.scss';

interface IModalOverlayPopup {
  onClick: () => void;
}

const ModalOverlayPopup: FC<IModalOverlayPopup> = ({
  onClick,
}): JSX.Element => {
  const handleOverlay = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return <div className={style.modal__overlay} onClick={handleOverlay}></div>;
};

export default ModalOverlayPopup;
