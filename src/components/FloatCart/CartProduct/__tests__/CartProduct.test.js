import CartProduct from '..';

const productMock = {
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
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <CartProduct product={productMock} removeProduct={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('append class shelf-item--mouseover when mouseover x button', () => {
  expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
    false
  );
  wrapped.find('.shelf-item__del').simulate('mouseover');
  expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
    true
  );
});