import prg from 'common/Constants';
import { updateQuantity } from './handlers';


export const initSubscribers = () => {
  PubSub.subscribe(prg.updateQuantity, (message, data) => {
    return updateQuantity(data);
  });
};
