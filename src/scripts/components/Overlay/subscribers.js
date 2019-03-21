import prg from 'common/Constants';
import overlay from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.showOverlay, (message, data) => {
    return overlay.show(data);
  });

  PubSub.subscribe(prg.hideOverlay, (message, data) => {
    return overlay.hide(data);
  });

  PubSub.subscribe(prg.toggleOverlay, (message, data) => {
    return overlay.toggle(data);
  });
};
