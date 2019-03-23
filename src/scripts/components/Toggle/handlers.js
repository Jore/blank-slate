import { toggleElement } from 'common/Helpers';

const toggle = data => {
  const { selector, className, action, animated } = data;

  return toggleElement({ selector, className, action, animated });
};

export default {
  toggle,
};
