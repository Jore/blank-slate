import dom from 'common/Dom';
import prg from 'common/Constants';
import { constCase } from 'common/Helpers';

const quantityChange = ({ newQuantity, inventory, type, id, key }) => {

  if (newQuantity > inventory) {
    const topic = prg.showModal;
    const data = { name: 'not-enough-inventory', data: { newQuantity, inventory } };

    PubSub.publish(topic, data);
  } else if (newQuantity >= 1) {
    const topic = `${prg.updateQuantity}.${constCase(type)}`;
    const data = { id, key, quantity: newQuantity };

    PubSub.publish(topic, data);
  } else if (newQuantity === 0 && type === 'line-item') {
    const topic = prg.removeFromCart;
    const data = { id, key };

    PubSub.publish(topic, data);
  }

};


const handleQuantityChangeClick = ({ currentTarget: self }) => {
  const change = parseInt(self.dataset.quantityChange, 10);
  const container = $(self).closest(dom.container)[0];
  const { container: type, containerId: id } = container.dataset;
  const { quantity, inventory, key } = State.get(id);
  const newQuantity = quantity + change;

  quantityChange({ newQuantity, inventory, type, id, key });

  return false;
};

const handleQuantityValueChange = ({ currentTarget: self }) => {
  const newQuantity = self.value;
  const container = dom.getSelf(self, 'product') || dom.getSelf(self, 'line-item');

  const { container: type, containerId: id } = container.dataset;
  const { inventory, key } = State.get(id);

  quantityChange({ newQuantity, inventory, type, id, key });

  return false;
};

export const bindActions = () => {
  $(document).on('click', dom.quantityChange, handleQuantityChangeClick);
  $(document).on('change', dom.quantityValue, handleQuantityValueChange);
};
