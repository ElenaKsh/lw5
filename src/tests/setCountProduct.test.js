const setCountProduct = require('../js/functions');

test('subtracts a value into "count"', () => {
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
  setCountProduct.setCountProduct(productElements[0], 5);
  setCountProduct.setCountProduct(productElements[1], 5);
  setCountProduct.setCountProduct(productElements[2], 5);
  expect(productElements[0].count).toEqual(5);
  expect(productElements[1].count).toEqual(5);
  expect(productElements[2].count).toEqual(5);
});
