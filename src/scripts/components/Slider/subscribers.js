import prg from 'common/Constants';

import slider from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updateOptionValue, (message, data) => {
    return slider.updateContainerSliders(data);
  });

  PubSub.subscribe(prg.updateContainerSliders, (message, data) => {
    return slider.updateContainerSliders(data);
  });

  PubSub.subscribe(prg.updateSliderSlide, (message, data) => {
    return slider.updateSlide(data);
  });
};
