import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';
import ShelfHeader from '../components/Shelf/ShelfHeader';
import Product from '../components/Shelf/ProductList/Product';
import CartProduct from '../components/FloatCart/CartProduct';

import { productsAPI } from '../services/util';

/*
  - Request the products;
  - check if the quantity returned is correct;
  - add 1 product to the cart and make sure it has been added correctly.
*/

const productsMock = {
  products: [
    {
      "id": 1,
      "sku": 111,
      "title": "TV",
      "description": "40 inch",
      "availableSizes": ["40", "50"],
      "style": "LED",
      "price": 11500.01,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "inventory" : 5
    },

    {
      "id": 2,
      "sku": 222,
      "title": "Fridge",
      "description": "200 ltr",
      "availableSizes": ["200"],
      "style": "Double Door",
      "price": 11110.99,
      "installments": 5,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true,
      "inventory":20
    }
  ]
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(productsAPI, {
    status: 200,
    response: productsMock
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('Integrations', () => {
  it('should fetch 2 products and add 1 to cart', done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    /* Before fetch the shelf should contain 0 products in it */
    expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(0);

    moxios.wait(() => {
      wrapped.update();

      /* and then after fetch, should contain 2 */
      expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);

      /* Cart should start with 0 products */
      expect(wrapped.find(CartProduct).length).toEqual(0);

      /* Click to add product to cart */
      wrapped
        .find(Product)
        .at(0)
        .simulate('click');

      /* Then after one product is added to cart, it should have 1 in it */
      expect(wrapped.find(CartProduct).length).toEqual(1);

      wrapped.unmount();
      done();
    });
  });
});