import { daysOfWeek, months } from '../constants';

export const reformatDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.').map(Number);
  const date = new Date(2000 + year, month - 1, day);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${
    daysOfWeek[date.getDay()]
  }`;
};
