import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import dom from 'common/Dom';
import prg from 'common/Constants';

const handleToggleClick = ({ currentTarget: self }) => {
  const selector = self.dataset.toggle;
  const action = self.dataset.toggleAction;
  const animated = (self.dataset.toggleAnimated === 'true');
  const lockScroll = self.dataset.lockScroll;
  const unlockScroll = self.dataset.unlockScroll;
  const className = self.dataset.activeClass || dom.isActiveClassName;

  if (lockScroll) {
    disableBodyScroll($(lockScroll)[0]);
    $('html').addClass('full-height');
  }

  if (unlockScroll) {
    enableBodyScroll($(unlockScroll)[0]);
    $('html').removeClass('full-height');
  }

  PubSub.publish(prg.toggle, { selector, className, action, animated });

  return false;
};

export const bindActions = () => {
  $(dom.toggle).on('click', handleToggleClick);
};
