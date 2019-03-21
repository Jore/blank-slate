import { getContainer } from 'common/Helpers';

import { init } from './handlers';
import { bindActions } from './bindings';
import { initSubscribers } from './subscribers';

export default {
  init,
  bindActions,
  initSubscribers,
};
