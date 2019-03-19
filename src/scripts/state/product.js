import dom from 'common/Dom';
import prg from 'common/Constants';
import { setSearchParm, getChildrenContainers } from 'common/Helpers';

import State from 'state';

const getVariant = id => {
  const state = State.get(id);
  const { options, variants } = state._data;
  const selectedOptions = options
    .map(option => option.name)
    .map(name => state[name]);
  const variant = variants.find(variant =>
    selectedOptions.every(selectedOption => variant.variant.options.includes(selectedOption)));
  return variant;
};

const getInitialOptionValues = options => {
  return options.reduce((optionValues, option) =>
    ({ ...optionValues, [option.name]: option.initialValue }), {});
};

const getInitialVariantData = variants => {
  const {variant: { id: variantId, price, compare_at_price }, inventory} = variants.find(variant => variant.isInitialVariant);
  return { variantId, inventory, price, compare_at_price };
};

export const updateVariant = data => {
  const { variant: { id: variantId }} = getVariant(data.id);
  const change = 'variant';
  const container = 'product';

  State.set({ ...data, variantId, change, container });
  PubSub.publish(prg.updateInventory, data);
  PubSub.publish(prg.updatePrice, data);
  setSearchParm('variant', variantId);
};

export const updateInventory = data => {
  const { inventory } = getVariant(data.id);
  const change = 'inventory';
  const container = 'product';

  State.set({ ...data, inventory, change, container });
};

export const updatePrice = data => {
  const { variant: { price, compare_at_price }} = getVariant(data.id);
  const change = 'price';
  const container = 'product';

  State.set({ ...data, price, compare_at_price, change, container });
};

export const updateProductQuantity = data => {
  const change = 'quantity';
  const container = 'product';

  State.set({ ...data, change, container });
};

export const updateOptionGroupValue = data => {
  const { id, name, value } = data;
  const change = name;
  const container = 'product';

  State.set({ id, change, container, [name]: value });
  PubSub.publish(prg.updateVariant, data);
};


export const getProductContainerData = productContainer => {
  const id = productContainer.dataset.containerId;
  const { data: images } = JSON.parse($(productContainer).find(dom.imageData).text());
  const { data: options } = JSON.parse($(productContainer).find(dom.optionData).text());
  const { data: variants } = JSON.parse($(productContainer).find(dom.variantData).text());
  const { data: product } = JSON.parse($(productContainer).find(dom.productData).text());
  const initialOptionValues = getInitialOptionValues(options);
  const initialVariantData = getInitialVariantData(variants);
  const quantity = parseInt($(productContainer).find(dom.quantityValue).val(), 10) || null;
  const { slider: sliders } = getChildrenContainers({ self: productContainer });

  return {
    _data: { images, options, variants, product },
    id,
    change: 'product',
    container: 'product',
    ...initialOptionValues,
    ...initialVariantData,
    quantity,
    sliders,
  };
};


export const initProductContainer = container => {
  const containerData = getProductContainerData(container);
  State.set(containerData);
};
