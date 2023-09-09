export const generateStopString = (stops: number) => {
  if (!stops) {
    return 'Без пересадок';
  }

  if (stops === 1) {
    return '1 пересадка';
  }

  return `${stops} пересадки`;
};
