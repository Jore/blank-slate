import prg from 'common/Constants';

import { showModal, hideModal } from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.showModal, (message, data) => {
    return showModal(data);
  });

  PubSub.subscribe(prg.hideModal, (message, data) => {
    return hideModal(data);
  });

  PubSub.subscribe(prg.hideOverlay, (message, data) => {
    return hideModal(data);
  });
};
