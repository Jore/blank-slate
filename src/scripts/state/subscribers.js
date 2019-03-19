import prg from 'common/Constants';

import { updateModal } from './modal';
import { updateCart } from './cart';

import {
  updateProductQuantity,
  updateOptionGroupValue,
  updateVariant,
  updateInventory,
  updatePrice, } from './product';

import {
  initLineItemContainers,
  updateLineItemQuantity, } from './line-item';

export const initSubscribers = () => {
  PubSub.subscribe(prg.updateInlineCartUI, (message, data) => {
    return initLineItemContainers(data);
  });

  PubSub.subscribe(prg.updateProductQuantity, (message, data) => {
    return updateProductQuantity(data);
  });

  PubSub.subscribe(prg.updateLineItemQuantity, (message, data) => {
    return updateLineItemQuantity(data);
  });

  PubSub.subscribe(prg.updateOptionGroupValue, (message, data) => {
    return updateOptionGroupValue(data);
  });

  PubSub.subscribe(prg.updateVariant, (message, data) => {
    return updateVariant(data);
  });

  PubSub.subscribe(prg.updateInventory, (message, data) => {
    return updateInventory(data);
  });

  PubSub.subscribe(prg.updatePrice, (message, data) => {
    return updatePrice(data);
  });

  PubSub.subscribe(prg.showModal, (message, data) => {
    return updateModal(data);
  });

  PubSub.subscribe(prg.hideModal, (message, data) => {
    return updateModal(data);
  });

  PubSub.subscribe(prg.cartRequestSuccess, (message, data) => {
    return updateCart(data);
  });
};
