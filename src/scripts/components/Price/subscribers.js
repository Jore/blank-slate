import prg from 'common/Constants';
import price from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updatePrice, (message, data) => {
    return price.update(data);
  });
};
