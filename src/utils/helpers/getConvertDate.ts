/**
 * Функция преобразования даты в формат YYYY-MM-DD
 * @param date  Передаём дату.
 * @returns {string} Возвращает дату в формате YYYY-MM-DD.
 */
export const getConvertDate = (date: Date): string => {
  const convertDate = date.toISOString().split('T')[0];
  return convertDate;
};
