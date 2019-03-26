import { setState } from './handlers';

import { settings } from 'components/Slider';


export const initSliderContainer = sliderContainer => {
  const { container, containerId: id, containerName: name } = sliderContainer.dataset;
  const sliderSettings = settings[name] || settings.default;
  const slider = $(sliderContainer).slick(sliderSettings);

  return setState({
    id,
    container,
    change: 'slider',
    name,
    slider,
  });
};
