import 'styles/theme.scss';
import 'styles/theme.scss.liquid';

import 'lazysizes';
import PubSub from 'pubsub-js';
import { focusHash, bindInPageLinks } from '@shopify/theme-a11y';


import State from 'state';

import { addSectionContainerClasses } from 'common/Helpers';

State.init();


// Common a11y fixes
focusHash();
bindInPageLinks();


document.addEventListener('DOMContentLoaded', () => {


  addSectionContainerClasses();
});

window.addEventListener('load', () => {

});

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
