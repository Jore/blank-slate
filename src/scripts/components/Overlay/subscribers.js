import prg from 'common/Constants';
import { showOverlay, hideOverlay, toggleOverlay } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.showOverlay, (message, data) => {
    return showOverlay(data);
  });

  PubSub.subscribe(prg.hideOverlay, (message, data) => {
    return hideOverlay(data);
  });

  PubSub.subscribe(prg.toggleOverlay, (message, data) => {
    return toggleOverlay(data);
  });
};
