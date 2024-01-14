export const getCorrectDate = (value: string): string => {
  const date = value.split('/');

  const day = [date[1]];
  const month = [date[0]];

  [date[0]] = [day[0]];
  [date[1]] = [month[0]];

  const correctDate = date.join('.');

  return correctDate;
};
