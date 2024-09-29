export const readableNumberFormatter = (
  number = 0,
  minimumFractionDigits = 0,
  maximumFractionDigits = 2
) => {
  return number.toLocaleString("en", {
    minimumFractionDigits,
    maximumFractionDigits,
  });
};
