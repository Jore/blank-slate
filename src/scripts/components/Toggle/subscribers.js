import prg from 'common/Constants';
import { toggle } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.toggle, (message, data) => {
    return toggle(data);
  });
};
