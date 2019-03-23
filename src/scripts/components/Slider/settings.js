const defaultSettings = {
  pageDots: false,
  wrapAround: true,
};

const mobileRowSlider = {
  ...defaultSettings,
  watchCSS: true,
};

const productGalleryThumbsSettings = {
  ...defaultSettings,
  init: false,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
  groupCells: true,
};

const productGallerySettings = {
  ...defaultSettings,
  adaptiveHeight: true,
  wrapAround: true,
  imagesLoaded: true,
};

const homePageHeroSettings = {
  ...defaultSettings,
  adaptiveHeight: true,
  autoPlay: true,
  wrapAround: true,
  lazyLoad: true,
};

const additionalProductImages = {
  ...defaultSettings,
  pageDots: true,
  cellAlign: 'center',
  prevNextButtons: true,
  imagesLoaded: true,
  wrapAround: false,
};

const testimonialQuotes = {
  ...defaultSettings,
  prevNextButtons: false,
  adaptiveHeight: true,
};

const testimonialLogos = {
  init: false,
};


const collaborationPageContentImagesSlider = {
  ...defaultSettings,
  wrapAround: false,
  prevNextButtons: true,
};


export default {
  default: defaultSettings,
  ['Testimonial Quotes']: testimonialQuotes,
  ['Testimonial Logos']: testimonialLogos,
  ['Best Sellers Row Slider']: mobileRowSlider,
  ['Product Page Related Cuts Slider']: mobileRowSlider,
  ['Product Gallery']: productGallerySettings,
  ['Product Gallery Thumbs']: productGalleryThumbsSettings,
  ['Product Secondary Images']: additionalProductImages,
  ['Home Page Hero']: homePageHeroSettings,
  ['Collaboration Page Content Images Slider']: collaborationPageContentImagesSlider,
};
