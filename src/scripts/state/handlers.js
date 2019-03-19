import dom from 'common/Dom';
import prg from 'common/Constants';
import { setSearchParm, getContainer } from 'common/Helpers';

import { state } from 'state';

export const getState = key => {
  if (key instanceof Element) {
    const { containerId } = getContainer({ self: key }).dataset;
    return getState(containerId);
  }

  const { cart, ...states } = state;
  const ids = Object.entries(states).reduce((allState, [name, values]) => ({ ...allState, ...values }), {});

  if (state[key]) {
    return state[key];
  } else if (ids[key]) {
    return ids[key];
  }

  return;
};

export const setState = data => {
  const { id, change, container, ...stateChange } = data;
  let newState;

  if (id && container) {
    const oldState = state[container][id];
    newState = { id, ...oldState, ...stateChange };
    state[container][id] = newState;
  } else if (container) {
    const oldState = state[container];
    newState = { ...oldState, ...stateChange };
    state[container] = newState;
  }

  const topic = (container === change)
    ? `${prg.updateState}.${container.toUpperCase()}`
    : `${prg.updateState}.${container.toUpperCase()}.${change.toUpperCase()}`;

  PubSub.publish(topic, { id, data, state: newState });

  return newState;
};

export const clearState = key => {
  const { cart, ...states } = state;
  const [group] = Object.entries(states).find(([name, values]) => Object.keys(values).includes(key)) || [];

  if (state[key]) {
    state[key] = {};
  } else if (group !== undefined) {
    delete state[group][key];
  }

  return state;
};
