import dom from 'common/Dom';
import prg from 'common/Constants';
import { toggleElement } from 'common/Helpers';

export const showOverlay = data => {
  const selector = dom.overlay;
  const className = prg.isActive;
  const action = 'add';
  const animated = true;

  return toggleElement({selector, action, animated});
};

export const hideOverlay = data => {
  const selector = dom.overlay;
  const className = prg.isActive;
  const action = 'remove';
  const animated = true;

  return toggleElement({selector, action, animated});
};

export const toggleOverlay = data => {
  const overlayActive = $(dom.overlay).is(dom.isActive);
  return (overlayActive) ? hideOverlay(data) : showOverlay(data);
};
