import { addItem, removeItem, updateItem } from '@shopify/theme-cart';

import dom from 'common/Dom';
import prg from 'common/Constants';
import { getContainer, debounce } from 'common/Helpers';


const updateAddToCartButtons = data => {
  const { id, data: { inventory }, state: { quantity } } = data;
  const { handle } = State.get(id);

  if (quantity === undefined || handle === 'gift-card') return;

  const $container = getContainer({ id, asJquery: true });

  if (inventory < 1) {
    $container.find(dom.addToCart).prop('disabled', true);
  } else {
    $container.find(dom.addToCart).prop('disabled', false);
  }
};

const addToCart = data => {
  const { id, quantity, properties } = data;
  const requestData = { id, quantity, properties };

  return addItem(id, { quantity, properties })
    .then(responseData => {
      const topic = prg.cartRequestSuccess;
      const data = { action: 'add', requestData, responseData };

      PubSub.publish(topic, data);
    })
    .catch(error => {
      const topic = prg.cartRequestError;
      const data = { error, requestData };

      PubSub.publish(topic, data);
    });
};

const removeFromCart = data => {
  const { key } = data;
  const requestData = { key };

  return removeItem(key)
    .then(responseData => {
      const topic = prg.cartRequestSuccess;
      const data = { action: 'remove', requestData, responseData };

      PubSub.publish(topic, data);
    })
    .catch(error => {
      const topic = prg.cartRequestError;
      const data = { error, requestData };

      PubSub.publish(topic, data);
    });
};

const updateCart = debounce(data => {
  const { key, quantity: quantityString } = data;
  const quantity = parseInt(quantityString);
  const requestData = { key, quantity };

  return updateItem(key, { quantity })
    .then(responseData => {
      const topic = prg.cartRequestSuccess;
      const data = { action: 'update', requestData, responseData };

      PubSub.publish(topic, data);
    })
    .catch(error => {
      const topic = prg.cartRequestError;
      const data = { error, requestData };

      PubSub.publish(topic, data);
    });
}, 300);

export const init = () => {
  const productContainers = getContainer({ type: 'product' });
  const containerIds = productContainers.map(container => container.dataset.containerId);
  const containerStates = containerIds.map(id => State.get(id));

  containerStates.forEach(state => {
    const { id, inventory, quantity } = state;

    updateAddToCartButtons({ id, data: { inventory }, state: { quantity } });
  });
};

export default {
  add: addToCart,
  update: updateCart,
  remove: removeFromCart,
  updateButtons: updateAddToCartButtons,
};
