import prg from 'common/Constants';

import { updateContainerSliders, updateSliderSlide } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updateOptionGroupValue, (message, data) => {
    return updateContainerSliders(data);
  });

  PubSub.subscribe(prg.updateSliderSlide, (message, data) => {
    return updateSliderSlide(data);
  });

  PubSub.subscribe(prg.updateContainerSliders, (message, data) => {
    return updateContainerSliders(data);
  });
};
