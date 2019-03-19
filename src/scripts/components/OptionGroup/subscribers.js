import PubSub from 'pubsub-js';

import prg from 'common/Constants';
import { updateOptionGroupSelectedText } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updateOptionGroupValue, (message, data) => {
    return updateOptionGroupSelectedText(data);
  });
};
