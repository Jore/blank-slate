import Flickity from 'flickity';
import 'flickity-imagesloaded';

import dom from 'common/Dom';
import prg from 'common/Constants';
import { unique, getContainer } from 'common/Helpers';

import settings from './settings';

const isFlickity = slider => {
  return slider.constructor.name === 'Flickity';
};

const updateSliderSlide = data => {
  const { slider, slideTo } = data;

  if (slider.isFlickity) {
    slider.slider.select(slideTo);
  }
};

export const updateContainerSliders = data => {
  const { id, name, value } = data;
  const { sliders } = State.get(id);
  const images = State.get(id)._data.images
    .filter(image => image[name] == value)
    .map(image => $('<img />', { src: image.src2x }));

  if (images.length == 0) return;

  sliders.forEach(slider => {
    const sliderState = State.get(slider);
    const newImages = [ ...images ].map(image =>
      $(image).clone().addClass('flickity-lazyloaded')[0]);

    if (sliderState.isFlickity) {
      const currentSlides = sliderState.slider.cells.map(cell => cell.element);
      sliderState.slider.append(newImages);
      sliderState.slider.remove(currentSlides);
      // sliderState.slider.select(0);

      setTimeout(() => {
        sliderState.slider.resize()
        sliderState.slider.lazyload()
      }, 100);

      PubSub.publish(prg.updateSliderSlide, { slider: sliderState, slideTo: 0 });
    } else {
      const newSlides = [ ...newImages ].map(image =>
        $(slider.children[0]).clone().html($(image).clone())[0]);

      $(sliderState.element).html(newSlides);
    }
  });
};

const initSlider = sliderContainer => {
  sliderContainer.element = sliderContainer;
  const { containerId: id, container, containerName: name, navFor, slidesToShow } = sliderContainer.dataset;
  const slides = [ ...Array.from(sliderContainer.children) ];
  const sliderSettings = settings[name] || settings.default;

  if (slides.length < slidesToShow || slides.length === 1) {
    sliderSettings.pageDots = false;
    sliderSettings.contain = true;
    sliderSettings.prevNextButtons = false;
    sliderSettings.draggable = false;
    sliderSettings.cellAlign = 'left';
  }

  if (sliderSettings.mq) {
    Object.entries(sliderSettings.mq).forEach(([query, options]) => {
      if (matchMedia(query).matches) {
        Object.entries(options).forEach(([option, value]) => sliderSettings[option] = value)
      }
    });
  }

  const slider = (sliderSettings.init === false)
    ? sliderContainer
    : new Flickity(sliderContainer, sliderSettings);

  return State.set({
    id,
    container,
    change: 'slider',
    element: sliderContainer,
    name,
    slider,
    slides,
    isFlickity: sliderSettings.init !== false,
    navFor: getContainer({ name: navFor }),
  });
};

export const init = () =>
  getContainer({ type: 'slider' })
    .map(sliderContainer => initSlider(sliderContainer));

export default {
  updateContainerSliders,
  updateSlide: updateSliderSlide,
};
