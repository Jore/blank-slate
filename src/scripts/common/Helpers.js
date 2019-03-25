import dom from 'common/Dom';

export const $$ = selector => {
  const nodes = document.querySelectorAll(selector);

  return Array.from(nodes);
};

export const priceString = priceInCents => `$${(priceInCents / 100).toFixed(2)}`;

export const random = (digits = 9) => {
  return Math.floor(Math.random() * Math.pow(10, digits));
};

export const unique = array => {
  return [ ...new Set(array) ];
};

export const debounce = (callback, time = 250, interval) => (...args) => {
  clearTimeout(interval);
  // eslint-disable-next-line no-param-reassign
  interval = setTimeout(() => callback(...args), time);
};

export const handlize = string =>
  string
    .trim()
    .toLowerCase()
    .replace(/[\s_]/g, '-');

export const constCase = string =>
  string
    .trim()
    .toUpperCase()
    .replace(/[\s-]/g, '_');

export const addSectionContainerClasses = ({ detail = {} } = {}) => {
  const { sections } = window.prg;
  const { sectionId: id } = detail;

  if (id) {
    $(`#shopify-section-${id}`).addClass(sections[id].classes.join(' '));
  } else {
    Object.entries(sections).forEach(([id, { classes }]) => $(`#shopify-section-${id}`).addClass(classes.join(' ')));
  }
};

export const getHandle = (type = 'product') => {
  if (type === 'collection') {
    return window.location.pathname.replace(/\/collections\/(.*)\/?/, '$1');
  } else if (type === 'product') {
    return window.location.pathname.replace(/\/products\/(.*)\/?/, '$1');
  }
  return window.location.pathname.replace(/\/products\/(.*)\/?/, '$1');
};

export const getSearchParm = params => {
  const searchParams = new URLSearchParams(window.location.search);

  return (typeof(params) === 'string')
    ? searchParams.get(params)
    : params.reduce((params, param) => ({ ...params, [param]: searchParams.get(param.toLowerCase()) }), {});
};

export const setSearchParm = (param, value) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(param, value);
  window.history.pushState('', '', `?${searchParams.toString()}`);
  return searchParams;
};

export const getAlternativeTemplate = ({ resource, templateName, json = false }) => {
  const url = `/${resource}?view=${templateName}`;
  const options = { credentials: 'include' };

  return fetch(url, options).then(res => (json) ? res.json() : res.text());
};


export const getContainer = ({ self, type, id, name, asjQuery = false }) => {
  if (id) {
    return (asjQuery)
      ? $(`[data-container-id="${id}"]`)
      : $(`[data-container-id="${id}"]`)[0];
  } else if (name) {
    return (asjQuery)
      ? $(`[data-container-name="${name}"]`)
      : $(`[data-container-name="${name}"]`)[0];
  } else if (self && type) {
    return (asjQuery)
      ? $(self).closest(`[data-container="${type}"]`)
      : $(self).closest(`[data-container="${type}"]`)[0];
  } else if (type) {
    return (asjQuery)
      ? $(`[data-container="${type}"]`)
      : $(`[data-container="${type}"]`).get();
  } else if (self) {
    return (asjQuery)
      ? $(self).closest(dom.container)
      : $(self).closest(dom.container)[0];
  }

  return (asjQuery)
    ? $(dom.container)
    : $(dom.container).get();
};

export const getParentContainers = ({ self, asjQuery = false, containers = {} }) => {
  const $container = getContainer({ self, asjQuery: true });

  if ($container.length === 0) return containers;

  const node = $container[0];
  const { container: type, containerId: id, containerName: name } = node.dataset;
  const containerData = (asjQuery)
    ? { id, name, node: $(node) }
    : { id, name, node };
  const parentContainers = { ...containers, [type]: containerData };

  return getParentContainers({ self: $container.parent()[0], containers: parentContainers });
};

export const getChildContainers = ({ self, asjQuery }) => {
  return $(self).find(dom.container).get().reduce((containers, node) => {
    const { container: type, containerId: id, containerName: name } = node.dataset;
    const containerData = (asjQuery)
      ? { id, name, node: $(node) }
      : { id, name, node };

    return { ...containers, [type]: [...containers[type] || [], containerData] };
  }, {});
};
