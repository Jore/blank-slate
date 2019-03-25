import dom from 'common/Dom';
import { toggleElement } from 'components/Toggle';

const showOverlay = () => {
  const selector = dom.overlay;
  const action = 'add';
  const animated = true;

  return toggleElement({ selector, action, animated });
};

const hideOverlay = () => {
  const selector = dom.overlay;
  const action = 'remove';
  const animated = true;

  return toggleElement({ selector, action, animated });
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
