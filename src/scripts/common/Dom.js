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
  isActive: '.is-active',
  isActiveSelector: '.is-active',
  isActiveClassName: 'is-active',

  // Overlay
  overlay: '[data-overlay]',

  // Toggle
  toggle: '[data-toggle]',

  // Modal
  modal: '[data-modal]',
  modalContents: '[data-modal-contents]',
  openModal: '[data-open-modal]',
  closeModal: '[data-close-modal]',
  toggleModal: '[data-toggle-modal]',

  // Inline Cart
  closeInlineCart: '[data-close-inline-cart]',
  toggleInlineCart: '[data-toggle-inline-cart]',
  inlineCart: '[data-inline-cart]',
  inlineCartContents: '[data-inline-cart-contents]',
  lineItemKey: '[data-line-item-key]',

  // Containers
  container: '[data-container]',
  productContainer: '[data-container="product"]',
  sliderContainer: '[data-container="slider"]',

  // JSON Data
  shopifyData: '[data-from-shopify]',
  productData: '[data-from-shopify="product"]',
  variantData: '[data-from-shopify="variant"]',
  lineItemData: '[data-from-shopify="line-item"]',
  imageData: '[data-from-shopify="image"]',
  optionData: '[data-from-shopify="option"]',

  // Cart Controls
  addToCart: '[data-add-to-cart]',
  removeFromCart: '[data-remove-from-cart]',
  quantityValue: '[data-quantity-value]',
  quantityChange: '[data-quantity-change]',
  selectedOptionValue: '[data-selected-option-value]',
  optionValue: '[data-option-value]',

  // Price
  price: '[data-price="price"]',
  compareAtPrice: '[data-price="compare_at_price"]',

  // Slider
  productGallerySlide: '[data-product-gallery-slide]',
  sliderHasNav: '[data-has-nav]',
  sliderFilterValue: '[data-filter-value]',
  galleryThumb: '[data-gallery-thumb]',
  gallerySlide: '[data-gallery-slide]',

  // Vendor
  selectizeInput: '.selectize-control.single .selectize-input',
  selectizeInputInput: '.selectize-control.single .selectize-input input',
};

export default dom;
