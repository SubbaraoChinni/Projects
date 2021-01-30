import Root from '../../../Root';
import FloatCart from '..';
import CartProduct from '../CartProduct';

const initialState = {
  cart: {
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
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <FloatCart />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should mount with 2 products in it', () => {
  expect(wrapped.find(CartProduct).length).toEqual(2);
});
