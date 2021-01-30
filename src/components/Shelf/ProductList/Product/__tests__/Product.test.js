import Product from '..';
import Root from '../../../../../Root';

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

it('mount without crashing', () => {
  const wrapped = mount(
    <Root>
      <Product product={productMock} addProduct={() => {}} />
    </Root>
  );
  wrapped.unmount();
});
