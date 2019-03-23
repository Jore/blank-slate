import dom from 'common/Dom';
import { getContainer } from 'common/Helpers';

const updatePrice = data => {
  const { id, data: { price, compareAtPrice } } = data;
  const $container = getContainer({ id, asJquery: true });
  const priceElement = $container.find(dom.price)[0];
  const compareAtPriceElement = $container.find(dom.compareAtPrice)[0];
  const compareAtPriceText = (compareAtPrice == null) ? '' : dom.priceString(compareAtPrice);

  priceElement.textContent = dom.priceString(price);
  compareAtPriceElement.textContent = compareAtPriceText;
};

export default {
  update: updatePrice,
};
