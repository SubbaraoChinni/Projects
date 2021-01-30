import Shelf from '..';
import Root from '../../../Root';
import ShelfHeader from '../ShelfHeader';
import ProductList from '../ProductList';
import Product from '../ProductList/Product';

const initialState = {
  shelf: {
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
      <Shelf />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows 2 products component', () => {
  expect(wrapped.find(Product).length).toEqual(2);
});

it('shows a shelf header with 2 products', () => {
  expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);
});

it('shows a product list component', () => {
  expect(wrapped.find(ProductList).length).toEqual(1);
});
