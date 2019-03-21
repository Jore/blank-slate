import prg from 'common/Constants';

import modal from './handlers';

export const initSubscribers = () => {
  PubSub.subscribe(prg.showModal, (message, data) => {
    return modal.show(data);
  });

  PubSub.subscribe(prg.hideModal, (message, data) => {
    return modal.hide(data);
  });

  PubSub.subscribe(prg.hideOverlay, (message, data) => {
    return modal.hide(data);
  });
};
