import dom from 'common/Dom';

import { handleOptionValueChange } from 'components/OptionGroup/bindings';

const defaultSettings = {

};

const productPageSizeOptionSettings = {
  maxItems: 1,
  create: false,
  createOnBlur: true,
  highlight: false,
  closeAfterSelect: true,
  onInitialize: () => $([dom.selectizeInput, dom.selectizeInputInput]).attr('disabled', 'disabled'),
  onChange: function () {
    handleOptionValueChange({ currentTarget: this.$input[0] })
  },
};

export default {
  default: defaultSettings,
  ['Product Page Size Option']: productPageSizeOptionSettings,
}
