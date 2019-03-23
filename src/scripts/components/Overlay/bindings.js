import dom from 'common/Dom';
import prg from 'common/Constants';

const handleOverlayClick = () => {
  PubSub.publish(prg.hideOverlay, {});
};

export const bindActions = () => {
  $(dom.overlay).on('click', handleOverlayClick);
};
