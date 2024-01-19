/**
 * Функция преобразования даты для тасок в формате: "1 Января"
 * @param date  Передаём дату.
 * @returns {string} Возвращает дату в формате: "1 Января".
 */
export const getLocalizationDate = (date: string): string => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  const d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day) + 1);

  return d.toLocaleString('ru', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
  });
};
