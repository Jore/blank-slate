import dom from 'common/Dom';
import prg from 'common/Constants';
import { addToCart, removeFromCart, updateCart, updateAddToCartButtons } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.addToCart, (message, data) => {
    return addToCart(data);
  });

  PubSub.subscribe(prg.removeFromCart, (message, data) => {
    return removeFromCart(data);
  });

  PubSub.subscribe(prg.updateLineItemQuantity, (message, data) => {
    return updateCart(data);
  });

  PubSub.subscribe(prg.updateStateInventory, (message, data) => {
    return updateAddToCartButtons(data);
  });
};
