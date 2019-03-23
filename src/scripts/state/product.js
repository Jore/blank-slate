import dom from 'common/Dom';
import prg from 'common/Constants';
import { setSearchParm, getChildContainers } from 'common/Helpers';

import { parseContainerData, getState, setState } from './handlers';

const getVariant = id => {
  const state = getState(id);
  const { variant: variants } = state._data;
  const selectedOptions = Object.values(state.options);

  return variants.find(({ options }) =>
    selectedOptions.every(option => options.includes(option)));
};

const updateVariant = data => {
  const { id: variantId } = getVariant(data.id);
  const change = 'variant';
  const container = 'product';

  setState({ ...data, variantId, change, container });
  PubSub.publish(prg.updateInventory, data);
  PubSub.publish(prg.updatePrice, data);
  setSearchParm('variant', variantId);
};

const updateInventory = data => {
  console.log(`updateInventory`);
  console.log(data);
  const { inventory } = getVariant(data.id);
  const change = 'inventory';
  const container = 'product';

  setState({ ...data, inventory, change, container });
};

const updatePrice = data => {
  console.log(`updatePrice`);
  console.log(data);
  const { variant: { price, compare_at_price: compareAtPrice } } = getVariant(data.id);
  const change = 'price';
  const container = 'product';

  setState({ ...data, price, compareAtPrice, change, container });
};

const updateQuantity = data => {
  console.log(`updateQuantity`);
  console.log(data);
  const container = 'product';
  const change = 'quantity';

  setState({ ...data, change, container });
};

const updateOptionValue = data => {
  console.log(`updateOptionValue`);
  console.log(data);
  const { id, name, value } = data;
  const container = 'product';
  const change = 'option_value';

  setState({ id, container, change, [name]: value });
  PubSub.publish(prg.updateVariant, data);
};

const getInitialOptionValues = products => {
  const activeProduct = products.find(product => product.active);

  return activeProduct.options.reduce((optionValues, option) =>
    ({ ...optionValues, [option.name]: option.initialValue }), {});
};

const getInitialVariantData = variants => {
  const { id: variantId, ...initialVariant } = variants.find(variant => variant.isInitialVariant);

  return { variantId, ...initialVariant };
};

export const initProductContainer = productContainer => {
  const { image, option, product, variant: variants } = parseContainerData(productContainer);
  const { containerId: id } = productContainer.dataset;
  const container = 'product';
  const change = 'init';
  const options = getInitialOptionValues(product);
  const variant = getInitialVariantData(variants);
  const quantity = parseInt($(dom.quantityValue, productContainer).val()) || undefined;
  const { slider: sliders } = getChildContainers({ self: productContainer });
  const _data = { image, option, variant: variants, product };

  setState({ id, container, change, options, variant, quantity, sliders, _data });
};

export default {
  updateQuantity,
  updateOptionValue,
  updateVariant,
  updateInventory,
  updatePrice,
};
