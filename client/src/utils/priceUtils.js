export const formatPrice = (price) => {
  return price.toString().includes('₹') ? price : `₹${price}`;
};

export const  extractNumericPrice = (priceString) => {
  const numericValue = priceString.replace(/[^\d.]/g, '');
  return parseFloat(numericValue);
}
