import Flickity from 'flickity';
import 'flickity-imagesloaded';

import dom from 'common/Dom';
import prg from 'common/Constants';
import { unique, getContainer } from 'common/Helpers';

import settings from './settings';

import State from 'state';

export const isFlickity = slider => {
  return slider.constructor.name === 'Flickity';
};

export const updateSliderSlide = data => {
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
    const newImages = [ ...images ].map(image => $(image).clone().addClass('flickity-lazyloaded')[0]);

    if (sliderState.isFlickity) {
      const currentSlides = sliderState.slider.cells.map(cell => cell.element);
      sliderState.slider.append(newImages);
      sliderState.slider.remove(currentSlides);
      sliderState.slider.select(0);
      sliderState.slider.select(0);
      setTimeout(() => {
        sliderState.slider.resize()
        sliderState.slider.lazyload()
      }, 100);
      PubSub.publish(prg.updateSliderSlide, { slider: sliderState, slideTo: 0 });
    } else {
      const newSlides = [ ...newImages ].map(image => $(slider.children[0]).clone().html($(image).clone())[0]);
      $(sliderState.element).html(newSlides);
    }
  });
};

const filterSlider = id => {
  const sliderState = State.get(id);

  if (!sliderState.isFilterable) return;

  const parentState = State.get(sliderState.parent);
  const filterValue = parentState[sliderState.filterGroup];
  const newSlides = sliderState.slides.filter(slide => slide.dataset.filterValue === filterValue);
  const allSlides = [ ...sliderState.slides ];

  if (sliderState.isFlickity) {
    sliderState.slider
      .remove(allSlides)
      .append(newSlides)
      .select(0);
  } else {
    $(sliderState.element).empty();
    $(sliderState.element).html(newSlides);
  }
};

const checkIfFilterable = (sliderState, option) => {
  if (!option) return false;
  const filterAttr = sliderState.element.dataset.filterAttr;
  const possibleFilterValues = sliderState.slides.map(slide => $(slide).attr(filterAttr));
  const uniquePossibleFilterValues = unique(possibleFilterValues);
  const everyValuePresent = option.values.every(value => uniquePossibleFilterValues.includes(value));

  const everyValueAtLeastTwice = option.values.every(value => {
    const occurances = possibleFilterValues.reduce((count, possibleValue) => {
      return (possibleValue === value) ? count + 1 : count;
    }, 0);
    return occurances >= 2;
  });

  return everyValuePresent && everyValueAtLeastTwice;
};

const getOption = (parentState, filterGroup) => {
  if (!parentState || !filterGroup) return;

  return parentState._data.options.find(option => option.name === filterGroup);
};

const getFilterGroup = (parentState, filterGroupOptions) => {
  if (!filterGroupOptions) return;
  const parentOptionNames = parentState._data.options.map(option => option.name);

  return filterGroupOptions
    .split('|')
    .find(option => parentOptionNames.includes(option));
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
    id, container, change: 'slider',
    element: sliderContainer,
    name,
    slider,
    slides,
    isFlickity: sliderSettings.init !== false,
    navFor: getContainer({ name: navFor }),
  });
};

const initFiltering = sliderState => {
  const { filterGroupOptions, container } = sliderState.element.dataset;
  const parentContainer = dom.getParentContainer(sliderState.element);
  const parentState = State.get(parentContainer);
  const filterGroup = getFilterGroup(parentState, filterGroupOptions);
  const option = getOption(parentState, filterGroup);
  const isFilterable = checkIfFilterable(sliderState, option);
  const change = 'slider';

  if (isFilterable) {
    const parentType = parentContainer.dataset.container.toUpperCase();
    const changeType = filterGroup.replace(' ', '_').toUpperCase();
    const topic = `${prg.updateState}.${parentType}.${changeType}`;

    PubSub.subscribe(topic, (message, data) => {
      if (data.id === parentState.id) {
        filterSlider(sliderState.id);
      }
    });
  }

  return State.set({
    id: sliderState.id,
    container,
    change,
    parent: parentContainer,
    filterGroup,
    isFilterable,
  });
};

export const initSliders = () => {
  const promises = getContainer({ type: 'slider' }).map(sliderContainer => {
    const slider = initSlider(sliderContainer);
    const withFiltering = initFiltering(slider);

    return Promise.resolve(withFiltering);
  });

  return Promise.all(promises);
};

export const filterSlides = () => {
  const promises = Object.values(State.get('slider'))
    .filter(slider => slider.isFilterable)
    .map(slider => filterSlider(slider.id));

  return Promise.all(promises);
};
