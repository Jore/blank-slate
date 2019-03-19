import prg from 'common/Constants';
import {
  openInlineCart,
  closeInlineCart,
  toggleInlineCart,
  updateInlineCartUI, } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.openInlineCart, (message, data) => {
    return openInlineCart(data);
  });

  PubSub.subscribe(prg.closeInlineCart, (message, data) => {
    return closeInlineCart(data);
  });

  PubSub.subscribe(prg.toggleInlineCart, (message, data) => {
    return toggleInlineCart(data);
  });

  PubSub.subscribe(prg.hideOverlay, (message, data) => {
    return closeInlineCart(data);
  });

  PubSub.subscribe(prg.cartRequestSuccess, (message, data) => {
    return updateInlineCartUI(data);
  });
};
