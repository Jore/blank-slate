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

  // MODAL
  hideModal:              'PRG.MODAL.HIDE',
  showModal:              'PRG.MODAL.SHOW',
  openModal:              'PRG.MODAL.OPEN',
  closeModal:             'PRG.MODAL.CLOSE',
  toggleModal:            'PRG.MODAL.TOGGLE',

  // OVERLAY
  showOverlay:            'PRG.OVERLAY.SHOW',
  hideOverlay:            'PRG.OVERLAY.HIDE',

  // QUICKSHOP
  openQuickshop:           'PRG.QUICKSHOP.OPEN',
  closeQuickshop:          'PRG.QUICKSHOP.CLOSE',
  toggleQuickshop:         'PRG.QUICKSHOP.TOGGLE',

  // SLIDER
  updateSliderSlide:       'PRG.SLIDER.UPDATE',
  updateContainerSliders:  'PRG.CONTAINER.SLIDERS.UPDATE',

  // STATE
  updateState:            'PRG.STATE.UPDATE',
  updateQuantity:         'PRG.STATE.QUANTITY',

  // PRODUCT CONTAINER
  updateInventory:        'PRG.STATE.INVENTORY.PRODUCT',
  updateOptionValue:      'PRG.STATE.OPTION_VALUE.PRODUCT',
  updateProductQuantity:  'PRG.STATE.QUANTITY.PRODUCT',
  updatePrice:            'PRG.STATE.PRICE.PRODUCT',
  updateVariant:          'PRG.STATE.VARIANT.PRODUCT',
  updateVariantId:        'PRG.STATE.VARIANT_ID.PRODUCT',

  // LINE ITEM
  updateLineItemQuantity: 'PRG.STATE.QUANTITY.LINE_ITEM',
};
