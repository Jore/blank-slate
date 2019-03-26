import 'slick';

import prg from 'common/Constants';

const updateSliderSlide = data => {
  const { slider, slideTo } = data;

  console.log(slider);
  console.log(slideTo);
};

export const updateContainerSliders = data => {
  const { id, name, value } = data;
  const { sliders } = State.get(id);
  const images = State.get(id)._data.images
    .filter(image => image[name] === value)
    .map(image => $('<img />', { src: image.src2x }));

  if (images.length === 0) return;

  sliders.forEach(slider => {
    const sliderState = State.get(slider);
    const newImages = [ ...images ].map(image =>
      $(image).clone().addClass('')[0]);

    const currentSlides = sliderState.slider.cells.map(cell => cell.element);

    sliderState.slider.append(newImages);
    sliderState.slider.remove(currentSlides);
    // sliderState.slider.select(0);

    setTimeout(() => {
      sliderState.slider.resize();
      sliderState.slider.lazyload();
    }, 100);

    PubSub.publish(prg.updateSliderSlide, { slider: sliderState, slideTo: 0 });

    // if (sliderState.isFlickity) {

    // } else {
    //   const newSlides = [ ...newImages ].map(image =>
    //     $(slider.children[0]).clone().html($(image).clone())[0]);

    //   $(sliderState.element).html(newSlides);
    // }
  });
};


export default {
  updateContainerSliders,
  updateSlide: updateSliderSlide,
};
