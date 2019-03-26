import 'styles/templates/index/index.scss';

import OptionGroup from 'components/OptionGroup';

OptionGroup.initSubscribers();

document.addEventListener('DOMContentLoaded', () => {
  OptionGroup.bindActions();
});

window.addEventListener('load', () => {

});
