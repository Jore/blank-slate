import prg from 'common/Constants';

import cart from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.addToCart, (message, data) => {
    return cart.add(data);
  });

  PubSub.subscribe(prg.removeFromCart, (message, data) => {
    return cart.remove(data);
  });

  PubSub.subscribe(prg.updateLineItemQuantity, (message, data) => {
    return cart.update(data);
  });

  PubSub.subscribe(prg.updateStateInventory, (message, data) => {
    return cart.updateButtons(data);
  });
};
