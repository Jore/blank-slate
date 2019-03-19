import dom from 'common/Dom';
import { getContainer } from 'common/Helpers';

import { initSubscribers } from './subscribers';
import { getState, setState, clearState, } from './handlers';

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

const init = data => {
  cacheCart();


  getContainer({})
    .forEach(container => {
      const { container: type } = container.dataset;
      const parser = parsers[type];

      if (parser) {
        parsers[type](container);
      }
    })

  // return [
  //   ...initProductContainers(data),
  //   ...initLineItemContainers(data),
  // ]
};

export default {
  initSubscribers,
  init,
  get: getState,
  set: setState,
  clear: clearState,
};


