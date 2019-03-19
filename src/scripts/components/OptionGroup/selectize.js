import dom from 'common/Dom';

import { bindActions, handleOptionValueChange } from './bindings';

const removeTextInputAndKeyboardControl = () => {
  $([dom.selectizeInput, dom.selectizeInputInput]).attr('disabled', 'disabled');
};

export const productPageSelectizeOptions = {
  maxItems: 1,
  create: false,
  createOnBlur: true,
  highlight: false,
  closeAfterSelect: true,
  onInitialize: removeTextInputAndKeyboardControl,
  onChange: function () {
    handleOptionValueChange({ currentTarget: this.$input[0] })
  },
}
