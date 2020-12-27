const setPriceProduct = require('../js/functions');

test('subtracts a value into "priceForOne"', () => {
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
  setPriceProduct.setPriceProduct(productElements[0], 5);
  setPriceProduct.setPriceProduct(productElements[1], 5);
  setPriceProduct.setPriceProduct(productElements[2], 5);
  expect(productElements[0].priceForOne).toEqual(5);
  expect(productElements[1].priceForOne).toEqual(5);
  expect(productElements[2].priceForOne).toEqual(5);
});
