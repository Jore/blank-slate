import dom from 'common/Dom';
import prg from 'common/Constants';

const handleOverlayClick = ({ currentTarget: self }) => {
  PubSub.publish(prg.hideOverlay, {});
};

export const bindActions = () => {
  $(dom.overlay).on('click', handleOverlayClick);
};
