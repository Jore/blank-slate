import dom from 'common/Dom';
import { toggleElement } from 'common/Helpers';

import settings from './settings';

const generateModalMarkup = data => {
  const { name, data: modalData } = data;

  return settings[name](modalData);
};

const displayModal = () => {
  const action = 'add';
  const animated = true;

  return Promise.all([
    toggleElement({ selector: dom.overlay, action, animated }),
    toggleElement({ selector: dom.modal, action, animated }),
  ]);
};

const closeModal = () => {
  const action = 'remove';
  const animated = true;

  return Promise.all([
    toggleElement({ selector: dom.overlay, action, animated }),
    toggleElement({ selector: dom.modal, action, animated }),
  ]);
};

const showModal = data => {
  const modalContents = generateModalMarkup(data);

  $(dom.modalContents).html(modalContents);

  return displayModal();
};

const hideModal = () => {
  return closeModal()
    .then(() => $(dom.modalContents).empty());
};

export default {
  show: showModal,
  hide: hideModal,
};
