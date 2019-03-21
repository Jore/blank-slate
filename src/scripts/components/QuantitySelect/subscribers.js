import prg from 'common/Constants';
import quantity from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updateQuantity, (message, data) => {
    return quantity.update(data);
  });
};
