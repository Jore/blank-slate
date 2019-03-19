import dom from 'common/Dom';
import prg from 'common/Constants';
import { getContainer } from 'common/Helpers';

import State from 'state';

const handleAddToCartClick = ({ currentTarget: self }) => {
  const { containerId: id } = getContainer({ self, type: 'product' }).dataset;
  const { variantId, quantity = 1, properties } = State.get(id);

  PubSub.publish(prg.addToCart, { id: variantId, quantity, properties });

  return false;
};

const handleRemoveFromCartClick = ({ currentTarget: self }) => {
  const id = getContainer({ self }).dataset.containerId;
  const { containerId: id } = getContainer({ self, type: 'line-item' }).dataset;
  const { key } = State.get(id);

  PubSub.publish(prg.removeFromCart, { key });

  return false;
};

export const bindActions = () => {
  $(document).on('click', dom.addToCart, handleAddToCartClick);
  $(document).on('click', dom.removeFromCart, handleRemoveFromCartClick);
};
