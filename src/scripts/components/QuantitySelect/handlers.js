import dom from 'common/Dom';

const updateQuantity = data => {
  const { id: containerId, quantity } = data;

  $(`[data-container-id="${containerId}"] ${dom.quantityValue}`).val(quantity);
};

export default {
  update: updateQuantity,
};
