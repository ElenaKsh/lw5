import productsTemplate from '../template/template.handlebars';
import {
  calculationTotalAmount,
  calculationPriceProduct,
  setCountProduct,
  setPriceProduct
} from './products-methods';

function createObservableArray(array, callback) {
  return new Proxy(array, {
    apply(target, thisArg) {
      callback();
      return thisArg[target].apply(this);
    },
    deleteProperty() {
      callback();
      return true;
    },
    set(target, property, value) {
      target[property] = value;
      callback();
      return true;
    }
  });
}

function createObservableObject(object, callback) {
  return new Proxy(object, {
    set(target, property, value) {
      target[property] = value;
      callback();
      return true;
    }
  });
}

let productElements = [
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

window.onload = function load() {
  function refresh() {
    const allPrice = calculationTotalAmount(productElements);
    const productsHTML = productsTemplate({ productElements, allPrice });
    document.querySelector('body').innerHTML = productsHTML;
    document
      .querySelectorAll('.table-products__element input')
      .forEach((element) => {
        element.addEventListener('dblclick', (event) => {
          event.target.readOnly = false;
        });
      });
    document
      .querySelectorAll('.table-products__element--count')
      .forEach((element) => {
        element.addEventListener('keydown', (event) => {
          if (event.keyCode === 13) {
            const id = +event.target.id.replace('count-', '');
            productElements.forEach((product) => {
              if (product.id === id) {
                setCountProduct(product, +event.target.value);
                calculationPriceProduct(productElements);
              }
            });
          }
        });
      });
    document
      .querySelectorAll('.table-products__element--priceForOne')
      .forEach((element) => {
        element.addEventListener('keydown', (event) => {
          if (event.keyCode === 13) {
            const id = +event.target.id.replace('priceForOne-', '');
            productElements.forEach((product) => {
              if (product.id === id) {
                setPriceProduct(product, +event.target.value);
                calculationPriceProduct(productElements);
              }
            });
          }
        });
      });
  }

  for (let i = 0; i < productElements.length; i++) {
    productElements[i] = createObservableObject(productElements[i], refresh);
  }
  productElements = createObservableArray(productElements, refresh);
  calculationPriceProduct(productElements);
  refresh();
};
