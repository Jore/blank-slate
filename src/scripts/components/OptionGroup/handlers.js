import dom from 'common/Dom';
import prg from 'common/Constants';
import { getContainer } from 'common/Helpers';

import State from 'state';

export const updateOptionGroupSelectedText = data => {
  const { id, name, value } = data;
  const optionValueSelectorString = `[data-option-group="${name}"] ${dom.selectedOptionValue}`;

  getContainer({ id, asjQuery: true }).find(optionValueSelectorString).text(value);
};
