export const priceCalculator = (
  price: number,
  currency: string,
  sign: string
) => {
  switch (currency) {
    case 'RUB':
      return `${price}${sign}`;
    case 'USD':
      return `${(price / 98).toFixed()}${sign}`;
    case 'EUR':
      return `${(price / 105).toFixed()}${sign}`;
    default:
      return price;
  }
};
