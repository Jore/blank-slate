import 'selectize/dist/js/standalone/selectize.min.js';

import dom from 'common/Dom';

import { bindActions } from './bindings';
import { initSubscribers } from './subscribers';
import { productPageSelectizeOptions as selectizeOptions } from './selectize';


const initSelectize = () => {
  return $(dom.selectize).selectize(selectizeOptions);
};

export default {
  initSubscribers,
  bindActions,
  initSelectize,
};
