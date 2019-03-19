import { getContainer } from 'common/Helpers';

import { bindActions } from './bindings';
import { initSubscribers } from './subscribers';
import { updateAddToCartButtons } from './handlers';

import State from 'state';

const init = () => {
  const productContainers = getContainers({ type: 'product' });
  const containerIds = productContainers.map(container => container.dataset.containerId);
  const containerStates = containerIds.map(id => State.get(id));

  containerStates.forEach(state => {
    const { id, inventory, quantity } = state;
    updateAddToCartButtons({ id, data: { inventory }, state: { quantity }});
  });
};

export default {
  initSubscribers,
  bindActions,
  init,
};
