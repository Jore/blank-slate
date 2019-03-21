import prg from 'common/Constants';
import optionGroup from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updateOptionValue, (message, data) => {
    return optionGroup.updateSelectedText(data);
  });
};
