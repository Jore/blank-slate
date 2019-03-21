import 'styles/theme.scss.liquid';
import 'styles/theme.scss';

import 'lazysizes';
import PubSub from 'pubsub-js';
import { focusHash, bindInPageLinks } from '@shopify/theme-a11y';

import { addSectionContainerClasses } from 'common/Helpers';

import CartControls from 'components/CartControls';


// Things that can go right away
focusHash();
bindInPageLinks();

State.cacheCart();
State.initSubscribers();
CartControls.initSubscribers();


// Things that need DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  State.init();
  CartControls.bindActions();

  addSectionContainerClasses();
});


// Things that need window load
window.addEventListener('load', () => {

});


// Dev / Debug
document.addEventListener('shopify:section:load', addSectionContainerClasses);
PubSub.immediateExceptions = true;
// PubSub.subscribe('PRG', (message, data) => console.log(message, data));


// HMR
// if (module.hot) {
//   module.hot.accept();
// }

// if (module.hot) {
//   module.hot.dispose(() => {
//     // reset/undo the behavior/side effect that as possibly enabled/enacted

//   });
// }
