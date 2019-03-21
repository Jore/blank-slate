import dom from 'common/Dom';
import prg from 'common/Constants';
import { toggleElement } from 'common/Helpers';

const showOverlay = data => {
  const selector = dom.overlay;
  const className = prg.isActive;
  const action = 'add';
  const animated = true;

  return toggleElement({selector, action, animated});
};

const hideOverlay = data => {
  const selector = dom.overlay;
  const className = prg.isActive;
  const action = 'remove';
  const animated = true;

  return toggleElement({selector, action, animated});
};

const toggleOverlay = data => {
  const overlayActive = $(dom.overlay).is(dom.isActive);

  return (overlayActive) ? hideOverlay(data) : showOverlay(data);
};

export default {
  show: showOverlay,
  hide: hideOverlay,
  toggle: toggleOverlay,
};
