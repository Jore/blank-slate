const defaultSettings = {
  dots: true,
  rows: 0,
};

const productGallery = {
  ...defaultSettings,
  adaptiveHeight: true,
  lazyLoad: 'progressive',
};

const homePageHero = {
  ...defaultSettings,
  autoPlay: true,
};

const testimonials = {
  ...defaultSettings,
  arrows: false,
  slidesToShow: 3,
};

export default {
  default: defaultSettings,
  ['Product Gallery']: productGallery,
  ['Home Page Hero']: homePageHero,
  ['Testimonials']: testimonials,
};
