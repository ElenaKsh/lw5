function calculationTotalPrice(product) {
  return product.count * product.priceForOne;
}

export function calculationTotalAmount(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += calculationTotalPrice(products[i]);
  }
  return sum;
}

/*
eslint no-return-assign: "error"
*/
export function calculationPriceProduct(products) {
  products.forEach(
    (product) => (product.priceTotal = calculationTotalPrice(product))
  );
}

export function setCountProduct(product, count) {
  if (Number.isNaN(count) || count < 0 || typeof count !== 'number') {
    return false;
  }
  product.count = count;
  return true;
}

export function setPriceProduct(product, priceProduct) {
  if (Number.isNaN(priceProduct) || priceProduct < 0 || typeof priceProduct !== 'number') {
    return false;
  }
  product.priceForOne = priceProduct;
  return true;
}
