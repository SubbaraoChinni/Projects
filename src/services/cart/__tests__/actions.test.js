import * as actions from '../actions';
import * as types from '../actionTypes';

const mockProduct = {
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
};

describe('floatCart actions', () => {
  describe('loadCart', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.LOAD_CART,
        payload: mockProduct
      };

      expect(actions.loadCart(mockProduct)).toEqual(expectedAction);
    });
  });

  describe('addProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.ADD_PRODUCT,
        payload: mockProduct
      };

      expect(actions.addProduct(mockProduct)).toEqual(expectedAction);
    });
  });

  describe('removeProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.REMOVE_PRODUCT,
        payload: mockProduct
      };

      expect(actions.removeProduct(mockProduct)).toEqual(expectedAction);
    });
  });
});
