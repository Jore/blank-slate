const toggleClass = ({ selector, normalizedclassName }) => {
  if (action === 'toggle') {
    $(selector).toggleClass(normalizedclassName);
  } else if (action === 'add') {
    $(selector).addClass(normalizedclassName);
  } else if (action === 'remove') {
    $(selector).removeClass(normalizedclassName);
  }
};

export const toggleElement = data => {
  const { selector, className = dom.isActive, action = 'toggle', animated = false } = data;
  const normalizedclassName = (className[0] === '.') ? className.slice(1) : className;
  const normalizedSelectorString = (className[0] !== '.') ? `.${className}` : className;
  const impossibleAdd = $(selector).is(normalizedSelectorString) && action === 'add';
  const impossibleRemove = !$(selector).is(normalizedSelectorString) && action === 'remove';

  if (impossibleAdd || impossibleRemove) {
    return Promise.resolve({});
  }

  if (animated) {
    return new Promise(resolve => {
      $(selector).one('transitionend', () => resolve({ selector, className, action, animated }));
      toggleClass({ selector, normalizedclassName });
    });
  }

  toggleClass({ selector, normalizedclassName });

  return Promise.resolve({ selector, className, action, animated });
};

export default {
  toggle: toggleElement,
};
