import { getState } from '@shopify/theme-cart';

import { setState, clearState } from './handlers';

export const cacheCart = () => {
  getState()
    .then(cart => window.prg.cart = cart);
};

const replaceCartState = newCart => {
  const change = 'cart';
  const container = 'cart';

  clearState('cart');
  setState({ change, container, ...newCart });
};

const updateCartState = data => {
  const { action, responseData } = data;

  if (action === 'add') {
    getState()
      .then(cart => replaceCartState(cart));
  } else if (action === 'remove' || action === 'update') {
    replaceCartState(responseData);
  }
};

export default {
  updateState: updateCartState,
};
