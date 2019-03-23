import 'selectize/dist/js/standalone/selectize.min.js';

import dom from 'common/Dom';
import { getContainer } from 'common/Helpers';

import settings from './settings';

const initDropdown = dropdownContainer => {
  const { containerName: name } = dropdownContainer.dataset;
  const dropdownSettings = settings[name] || settings.default;

  return $(dom.selectize).selectize(dropdownSettings);
};

export const init = () =>
  getContainer({ type: 'dropdown' })
    .map(dropdownContainer => initDropdown(dropdownContainer));
