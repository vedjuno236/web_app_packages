export const formatLaoKip = (price: number) => {
  return new Intl.NumberFormat('lo-LA', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

