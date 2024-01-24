import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import style from './modal-popup.module.scss';

import ModalOverlayPopup from '../modal-overlay-popup/modal-overlay-popup';
import ButtonIcon from '../../ui/buttons/buttonIcon/buttonIcon';

const modalContainer = document.querySelector('#modals') as HTMLElement;

interface IModalPopup {
  onClick: () => void;
  children: JSX.Element;
  closeIcon?: boolean;
}

/**
 * Универсальный компонент ModalPopup - Модальное окно с контентом
 * @param onClick - callback функция
 * @param children - Дочерний компонент с контентом попапа
 * @param closeIcon - Состояние показывающее нужна ли закрывающая кнопка
 * @returns {JSX.Element}
 */
const ModalPopup: FC<IModalPopup> = ({
  onClick,
  children,
  closeIcon = true,
}): JSX.Element => {
  useEffect(() => {
    function closeEscModal(evt: KeyboardEvent) {
      if (evt.key === 'Escape') onClick();
    }

    document.addEventListener('keydown', closeEscModal);

    return () => {
      document.removeEventListener('keydown', closeEscModal);
    };
  }, [onClick]);

  return createPortal(
    <div className={style.modal}>
      <ModalOverlayPopup onClick={onClick} />
      <div className={style.content}>
        {children}
        {closeIcon && (
          <ButtonIcon
            icon={'close'}
            isColored
            extraClass={style.icon}
            buttonClass={style.button}
            onClick={onClick}
          />
        )}
      </div>
    </div>,
    modalContainer
  );
};

export default ModalPopup;
