import dom from 'common/Dom';
import prg from 'common/Constants';
import { toggleElement, getAlternativeTemplate } from 'common/Helpers';

const updateInlineCartUI = () => {
  const resource = 'cart';
  const templateName = 'ajax-inline-cart';

  return getAlternativeTemplate({ resource, templateName })
    .then(newCart => $(dom.inlineCartContents).html(newCart))
    .then(() => {
      PubSub.publish(prg.updateInlineCartUI, {});
      PubSub.publish(prg.openInlineCart, {});
    });
};

const openInlineCart = () => {
  const action = 'add';
  const animated = true;

  return toggleElement({ selector: dom.overlay, action, animated })
    .then(() => toggleElement({ selector: dom.inlineCart, action, animated }));
};

const closeInlineCart = () => {
  const action = 'remove';
  const animated = true;

  return toggleElement({ selector: dom.inlineCart, action, animated })
    .then(() => toggleElement({ selector: dom.overlay, action, animated }));
};

const toggleInlineCart = data => {
  const inlineCartOpen = $(dom.inlineCart).is(dom.isActive);

  return (inlineCartOpen) ? closeInlineCart(data) : openInlineCart(data);
};

export default {
  updateUI: updateInlineCartUI,
  open: openInlineCart,
  close: closeInlineCart,
  toggle: toggleInlineCart,
};
