/*

  Declare and export all DOM strings here

  e.g.

  export default {
    inlineCart: '[data-inline-cart]',
    inlineCartContents: '[data-inline-cart-contents]',
  };

  Usage:

  import dom from 'common/Dom';
  import { getCartContents } from './handlers';

  $(dom.inlineCartContents).html(getCartContents());

*/
const dom = {
  // Active Classes
  isActive:            '.is-active',
  isActiveSelector:    '.is-active',
  isActiveClassName:   'is-active',

  // Overlay
  overlay:             '[data-overlay]',

  // Toggle
  toggle:              '[data-toggle]',

  // Modal
  modal:               '[data-modal]',
  openModal:           '[data-open-modal]',
  closeModal:          '[data-close-modal]',
  toggleModal:         '[data-toggle-modal]',
  modalContents:       '[data-modal-contents]',

  // Inline Cart
  inlineCart:          '[data-inline-cart]',
  lineItemKey:         '[data-line-item-key]',
  closeInlineCart:     '[data-close-inline-cart]',
  toggleInlineCart:    '[data-toggle-inline-cart]',
  inlineCartContents:  '[data-inline-cart-contents]',

  // Containers
  container:           '[data-container]',
  sliderContainer:     '[data-container="slider"]',
  productContainer:    '[data-container="product"]',

  // JSON Data
  imageData:           '[data-from-shopify="image"]',
  optionData:          '[data-from-shopify="option"]',
  shopifyData:         '[data-from-shopify]',
  productData:         '[data-from-shopify="product"]',
  variantData:         '[data-from-shopify="variant"]',
  lineItemData:        '[data-from-shopify="line-item"]',

  // Cart Controls
  addToCart:           '[data-add-to-cart]',
  optionValue:         '[data-option-value]',
  quantityValue:       '[data-quantity-value]',
  quantityChange:      '[data-quantity-change]',
  removeFromCart:      '[data-remove-from-cart]',
  selectedOptionValue: '[data-selected-option-value]',

  // Price
  price:               '[data-price="price"]',
  compareAtPrice:      '[data-price="compare_at_price"]',

  // Slider
  sliderHasNav:        '[data-has-nav]',
  galleryThumb:        '[data-gallery-thumb]',
  gallerySlide:        '[data-gallery-slide]',
  sliderFilterValue:   '[data-filter-value]',
  productGallerySlide: '[data-product-gallery-slide]',

  // Vendor
  selectizeInput:      '.selectize-control.single .selectize-input',
  selectizeInputInput: '.selectize-control.single .selectize-input input',
};

export default dom;
