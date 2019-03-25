import { bindActions } from './bindings';
import { initSubscribers } from './subscribers';
import { toggleElement } from './handlers';

export const toggleElement = toggleElement;

export default {
  initSubscribers,
  bindActions,
};
