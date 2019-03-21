/*

  Declare and export all constants here

  e.g.

  export default {
    openInlineCart: 'PRG.OPEN_INLINE_CART',
    closeInlineCart: 'PRG.CLOSE_INLINE_CART',
  };

*/

export default {
  // ANIMATION
  animationEnd:           'PRG.ANIMATION.END',
  animationStart:         'PRG.ANIMATION.START',

  // CART
  addToCart:              'PRG.CART.ADD',
  removeFromCart:         'PRG.CART.REMOVE',
  updateCart:             'PRG.CART.UPDATE',
  cartRequestError:       'PRG.CART.REQUEST.ERROR',
  cartRequestSuccess:     'PRG.CART.REQUEST.SUCCESS',

  // INLINE_CART
  openInlineCart:         'PRG.INLINE_CART.OPEN',
  closeInlineCart:        'PRG.INLINE_CART.CLOSE',
  toggleInlineCart:       'PRG.INLINE_CART.TOGGLE',
  updateInlineCartUI:     'PRG.INLINE_CART.UPDATE',

  // TOGGLE
  toggle:                 'PRG.TOGGLE',

  // modal
  hideModal:              'PRG.MODAL.HIDE',
  showModal:              'PRG.MODAL.SHOW',
  openModal:              'PRG.MODAL.OPEN',
  closeModal:             'PRG.MODAL.CLOSE',
  toggleModal:            'PRG.MODAL.TOGGLE',

  // overlay
  showOverlay:            'PRG.OVERLAY.SHOW',
  hideOverlay:            'PRG.OVERLAY.HIDE',

  // quickshop
  openQuickshop:           'PRG.QUICKSHOP.OPEN',
  closeQuickshop:          'PRG.QUICKSHOP.CLOSE',
  toggleQuickshop:         'PRG.QUICKSHOP.TOGGLE',

  // slider
  updateSliderSlide:       'PRG.SLIDER.UPDATE',
  updateContainerSliders:  'PRG.CONTAINER.SLIDERS.UPDATE',

  // state
  updateState:            'PRG.STATE.UPDATE',

  // product container
  updateInventory:        'PRG.STATE.INVENTORY',
  updateOptionValue:      'PRG.STATE.OPTION_VALUE',
  updateQuantity:         'PRG.STATE.QUANTITY',
  updateProductQuantity:  'PRG.STATE.QUANTITY',
  updatePrice:            'PRG.STATE.PRICE',

  updateLineItemQuantity: 'PRG.STATE.QUANTITYLINE_ITEM',
  updateLineItemQuantity: 'PRG.QUANTITY.UPDATE.LINE_ITEM',
  updateCart:             'PRG.STATE.UPDATE.CART',
  updateVariant:          'PRG.VARIANT.UPDATE',
  updateVariantId:        'PRG.VARIANT.UPDATE.ID',
};
