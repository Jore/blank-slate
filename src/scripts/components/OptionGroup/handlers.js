import dom from 'common/Dom';
import { getContainer } from 'common/Helpers';

const updateOptionGroupSelectedText = data => {
  const { id, name, value } = data;
  const optionValueSelectorString = `[data-option-group="${name}"] ${dom.selectedOptionValue}`;

  getContainer({ id, asjQuery: true }).find(optionValueSelectorString).text(value);
};

export default {
  updateSelectedText: updateOptionGroupSelectedText,
};
