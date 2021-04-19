export const formatMoney = (num) =>
  (+num).toLocaleString("us", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    useGrouping: true,
  });
