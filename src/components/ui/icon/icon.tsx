import { FC, memo, useId, useRef, useState } from 'react';

import { getSvgImport } from '../../../utils/helpers/getSvgImport';

export interface IIcon {
  /**
   * Строка для идентификации иконки. Прокидываем название файла иконки, без расширения.
   * */
  name: string;
  /**
   * Можно ли управлять цветом иконки через css. Запрещено, например, для многоцветных иконок
   * */
  isColored: boolean;
  /**
   * Cтилизация иконки: цвет, размер, дополнительные анимации
   * */
  extraClass?: string;
}

/**
 * Компонент-обёртка для Иконок
 * @example
 * <Icon
 *  name="avatar"
 *  isColored={false}
 *  extraClass={style.icon}
 * />
 **/

const Icon: FC<IIcon> = memo(({ name, extraClass, isColored }): JSX.Element => {
  const [icon, setIcon] = useState<string>('');
  const importedIconRef = useRef<string>('');
  const filterId = useId();

  getSvgImport(name, importedIconRef)
    .then((res) => setIcon(res))
    .catch((err) => console.error(err));

  return (
    <>
      {icon && (
        <svg className={extraClass} width="100%" height="100%">
          {isColored && (
            <filter id={filterId}>
              <feFlood in="SourceGraphic" floodColor="currentColor" />
              <feComposite in2="SourceAlpha" operator="in" />
            </filter>
          )}
          <image
            href={icon}
            filter={`url(#${filterId})`}
            width="100%"
            height="100%"
            x="0"
            y="0"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      )}
    </>
  );
});

export default Icon;
