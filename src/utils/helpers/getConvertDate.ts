export const getConvertDate = (date: Date): string => {
  const convertDate = date.toISOString().split('T')[0];

  return convertDate;
};
