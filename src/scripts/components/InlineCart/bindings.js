import dom from 'common/Dom';
import prg from 'common/Constants';

const handleCloseInlineCartClick = () => {
  PubSub.publish(prg.closeInlineCart, {});
};

const handleToggleInlineCartClick = () => {
  PubSub.publish(prg.toggleInlineCart, {});
};

export const bindActions = () => {
  $(dom.toggleInlineCart).on('click', handleToggleInlineCartClick)
  $(dom.inlineCart).on('click', dom.closeInlineCart, handleCloseInlineCartClick)
};
