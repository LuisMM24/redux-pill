export const formatMoney = (option: number): string => {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(option);
};

export const setPrices = (): Array<number> => {
  const options = Array(30);
  let arrayOfNumbers: Array<number> = [];
  for (let i = 1; i < options.length; i++) {
    arrayOfNumbers.push(60000 * (0.5 * i));
  }
  return arrayOfNumbers;
};
