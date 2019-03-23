import uniqby from 'lodash.uniqby';

import dom from 'common/Dom';
import prg from 'common/Constants';
import { getContainer } from 'common/Helpers';

import { state } from 'state';

export const getState = key => {
  if (key instanceof Element) {
    const { containerId: id } = getContainer({ self: key }).dataset;

    return getState(id);
  }

  // eslint-disable-next-line no-unused-vars
  const { cart, ...states } = state;
  const ids = Object.entries(states)
    // eslint-disable-next-line no-unused-vars
    .reduce((allState, [name, values]) => ({ ...allState, ...values }), {});

  if (state[key]) {
    return state[key];
  } else if (ids[key]) {
    return ids[key];
  }

  return state;
};

export const setState = data => {
  console.log(data);
  const { id, container, change, ...stateChange } = data;

  if (!container) return;

  const oldState = (id) ? state[container][id] : state[container];
  const newState = { ...oldState, ...stateChange };

  if (id) {
    state[container][id] = newState;
  } else if (container) {
    state[container] = newState;
  }

  const topic = `${prg.updateState}.${container.toUpperCase()}.${change.toUpperCase()}`;

  PubSub.publish(topic, { id, data, state: newState });
};

export const clearState = key => {
  // eslint-disable-next-line no-unused-vars
  const { cart, ...states } = state;
  // eslint-disable-next-line no-unused-vars
  const [ group ] = Object.entries(states).find(([name, values]) => Object.keys(values).includes(key)) || [];

  if (state[key]) {
    state[key] = {};
  } else if (group !== undefined) {
    delete state[group][key];
  }

  return state;
};

export const parseContainerData = container => {
  return $(dom.shopifyData, container).get()
    .reduce((containerData, json) => {
      const { data } = JSON.parse(json.text);
      const { fromShopify: type } = json.dataset;
      const typeData = containerData[type] || [];
      const newData = uniqby([...typeData, data].flat(), '_id');

      return { ...containerData, [type]: newData };
    }, {});
};
