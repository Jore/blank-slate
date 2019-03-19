import prg from 'common/Constants';
import { updatePrice } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updateStatePrice, (message, data) => {
    return updatePrice(data);
  });
};
