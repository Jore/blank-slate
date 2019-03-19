import PubSub from 'pubsub-js';

import dom from 'common/Dom';
import prg from 'common/Constants';
import { getContainer } from 'common/Helpers';

import State from 'state';

const updateParentOptionValue = (parent, filterGroup, filterValue) => {
  if (!parent || !filterGroup || !filterValue) return false;
  const parentState = State.get(parent);
  const option = parentState._data.options.find(option => option.name === filterGroup);

  if (option && option.values.includes(filterValue) && parentState[filterGroup] !== filterValue) {
    const topic = `${prg.updateOptionGroupValue}.${filterGroup.toUpperCase()}`;
    const data = { id: parentState.id, name: filterGroup, value: filterValue };

    PubSub.publish(topic, data);
  }
};

export const updateContainerSliders = (container, index) => {
  const id = container.dataset.containerId;
  const name = 'slide-index';
  const value = index;

  const topic = prg.updateContainerSliders;
  const data = { id, name, value };

  PubSub.publish(topic, data);
};


const handleSliderThumbClick = ({ currentTarget: self }) => {
  const { slideIndex: slideTo } = self.dataset;
  const sliderContainer = getContainer({ self, type: 'slider' });
  const { navFor, parent, filterGroup } = State.get(sliderContainer);
  const slider = State.get(navFor);

  const topic = prg.updateSliderSlide;
  const data = { slider, slideTo };

  PubSub.publish(topic, data);

  return false;
};

export const bindActions = () => {
  $(document).on('click', dom.galleryThumb, handleSliderThumbClick);
};
