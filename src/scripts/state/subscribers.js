import prg from 'common/Constants';

import cart from './cart';
import modal from './modal';
import product from './product';
import lineItem from './line-item';


export const initSubscribers = () => {
  PubSub.subscribe(prg.updateQuantity, (message, data) => {
    return product.updateQuantity(data);
  });

  PubSub.subscribe(prg.updateOptionValue, (message, data) => {
    return product.updateOptionValue(data);
  });

  PubSub.subscribe(prg.updateVariant, (message, data) => {
    return product.updateVariant(data);
  });

  PubSub.subscribe(prg.updateInventory, (message, data) => {
    return product.updateInventory(data);
  });

  PubSub.subscribe(prg.updatePrice, (message, data) => {
    return product.updatePrice(data);
  });

  PubSub.subscribe(prg.updateInlineCartUI, (message, data) => {
    return lineItem.initLineItemContainers(data);
  });

  PubSub.subscribe(prg.updateLineItemQuantity, (message, data) => {
    return lineItem.updateQuantity(data);
  });

  PubSub.subscribe(prg.showModal, (message, data) => {
    return modal.updateState(data);
  });

  PubSub.subscribe(prg.hideModal, (message, data) => {
    return modal.updateState(data);
  });

  PubSub.subscribe(prg.cartRequestSuccess, (message, data) => {
    return cart.updateState(data);
  });
};
