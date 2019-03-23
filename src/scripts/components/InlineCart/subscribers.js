import prg from 'common/Constants';
import inlineCart from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.openInlineCart, (message, data) => {
    return inlineCart.open(data);
  });

  PubSub.subscribe(prg.closeInlineCart, (message, data) => {
    return inlineCart.close(data);
  });

  PubSub.subscribe(prg.toggleInlineCart, (message, data) => {
    return inlineCart.toggle(data);
  });

  PubSub.subscribe(prg.hideOverlay, (message, data) => {
    return inlineCart.close(data);
  });

  PubSub.subscribe(prg.cartRequestSuccess, (message, data) => {
    return inlineCart.updateUI(data);
  });
};
