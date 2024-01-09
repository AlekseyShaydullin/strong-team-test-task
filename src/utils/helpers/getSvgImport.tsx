import { MutableRefObject } from 'react';

/**
 * Функция получения адреса иконки
 * @param name Передаём название файла иконки, без расширения.
 * @param importedIconRef Рефф ссылки на иконку
 * @returns Возвращает Promise с ссылкой на иконку.
 */
export const getSvgImport = async (
  name: string,
  importedIconRef: MutableRefObject<string>
): Promise<string> => {
  /** Необходимо убедиться, что все иконки располежены в одной директории */
  /** Если в коде большая база иконок, то следует в пропсах прокидывать и iconPath */
  importedIconRef.current = (
    await import(`../../assets/icons/${name}.svg`)
  ).default;

  return importedIconRef.current;
};
