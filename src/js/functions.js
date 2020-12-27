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
  product.count = count;
}

export function setPriceProduct(product, priceProduct) {
  product.priceForOne = priceProduct;
}
