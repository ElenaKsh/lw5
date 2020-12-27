const calculationPriceProduct = require('../js/functions');

test('calculates the total price of each product', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5
    }
  ];
  calculationPriceProduct.calculationPriceProduct(productElements);
  expect(productElements[0].priceTotal).toBe(2000);
  expect(productElements[1].priceTotal).toBe(2000);
  expect(productElements[2].priceTotal).toBe(1000);
  expect(productElements).toHaveLength(3);
});
