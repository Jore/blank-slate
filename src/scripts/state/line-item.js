import dom from 'common/Dom';

import { parseContainerData, setState } from './handlers';

const updateQuantity = data => {
  console.log(`updateLineItemQuantity`);
  console.log(data);

  const change = 'quantity';
  const container = 'line-item';

  setState({ container, change, ...data });
};

export const initLineItemContainer = lineItemContainer => {
  const lineItem = parseContainerData(lineItemContainer)['line-item'][0];
  const { containerId: id } = lineItemContainer.dataset;
  const container = 'line-item';
  const change = 'init';
  const quantity = parseInt($(dom.quantityValue, lineItemContainer).val()) || undefined;

  setState({ id, container, change, ...lineItem, quantity, _data: lineItem });
};

export default {
  updateQuantity,
};
