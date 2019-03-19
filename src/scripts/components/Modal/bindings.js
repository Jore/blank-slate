import dom from 'common/Dom';
import prg from 'common/Constants';

const handleModalClose = ({ currentTarget: self }) => {
  const name = self.dataset.closeModal;
  const close = true;

  PubSub.publish(prg.hideModal, { name, close });
};

const handleModalToggleClick = ({ currentTarget: self }) => {
  const { toggleModal: modalName, modalData } = self.dataset;
  const topic = prg.showModal;
  const data = { name: modalName, data: { modalData } };

  PubSub.publish(topic, data);
};

export const bindActions = () => {
  $(dom.modal).on('click', dom.closeModal, handleModalClose);
  $(dom.toggleModal).on('click', handleModalToggleClick)
};
