import PubSub from 'pubsub-js';

import dom from 'common/Dom';
import prg from 'common/Constants';
import { getContainer } from 'common/Helpers';

export const handleOptionValueChange = ({ currentTarget: self }) => {
  const { containerId: id } = getContainer({ self, type: 'product' }).dataset;
  const { name, value } = self;

  const topic = `${prg.updateOptionGroupValue}.${name.toUpperCase()}`;
  const data = { id, name, value };

  PubSub.publish(topic, data);
};

export const bindActions = () => {
  $(dom.optionValue).on('change', handleOptionValueChange);
  $(document).on('mouseover', dom.quickshopOptionValue, handleOptionValueChange);
};
