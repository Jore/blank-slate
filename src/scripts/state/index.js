import { getContainer } from 'common/Helpers';

import { initSubscribers } from './subscribers';
import { getState, setState, clearState } from './handlers';

import { initProductContainer } from './product';
import { initLineItemContainer } from './line-item';
import { initSliderContainer } from './slider';
import { cacheCart } from './cart';

export const state = window.prg.state;

const parsers = {
  'product': initProductContainer,
  'line-item': initLineItemContainer,
  'slider': initSliderContainer,
};

const init = () => {
  return getContainer({})
    .map(container => parsers[container.dataset.container](container));
};

export default {
  init,
  initSubscribers,
  get: getState,
  set: setState,
  clear: clearState,
  cacheCart,
};
