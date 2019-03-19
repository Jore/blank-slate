const modalTitle = (strings, ...values) =>
  `<h2 class="oo-modal-title heading-two u-mb-30">${strings[0]}</h2>`;

const modalSubtitle = (strings, ...values) =>
  `<h3 class="oo-modal-subtitle">${strings[0]}</h3>`;

const modalBody = (strings, ...values) =>
  `<div class="oo-modal-body">${strings[0]}</div>`;

const modalClose = (classes = '', modalName= '', text = '+') =>
  `<span class="oo-close-modal ${classes}" data-close-modal="${modalName}">${text}</span>`;

const notEnoughInventory = data => {
  const { newQuantity, inventory } = data;
  const title = modalTitle`Oops...`;
  const subtitle = modalSubtitle`We currently don't have enough inventory of that Item.`;
  const body = `<div class="modal-body"><p>You requested ${newQuantity} but we only have ${inventory}. Please Adjust your selection and try again.</p></div>`;
  const close = modalClose('button--secondary', 'not-enough-inventory');

  return `
    ${title}
    ${body}
    ${close}
  `;
};


const freeShipping = data => {
  // const subtitle = modalSubtitle`We currently don't have enough inventory of that Item.`;
  // const body = `<div class="modal-body">You requested 420 but we only have 69. Please Adjust your selection and try again.</div>`;
};

const sizeGuide = data => {
  const title = modalTitle`Size Guide`;
  const body = modalBody`
    <table cellspacing="0" class="size-fit-table">
      <tbody>
        <tr class="size-fit-sizes">
          <td class="fix u-text-gray heading-four">Sizing Grid</td>
          <td>S</td>
          <td>M</td>
          <td>L</td>
          <td>XL</td>
          <td>XXL</td>
        </tr>
        <tr>
          <td class="fix">Chest</td>
          <td>38</td>
          <td>41</td>
          <td>42</td>
          <td>45</td>
          <td>48</td>
        </tr>
        <tr>
          <td class="fix">Body Length</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td>32</td>
          <td>33</td>
        </tr>
        <tr>
          <td class="fix">Shoulder</td>
          <td>17</td>
          <td>17.5</td>
          <td>18</td>
          <td>18.5</td>
          <td>19</td>
        </tr>
        <tr>
          <td class="fix">Short Sleeve</td>
          <td>7.5</td>
          <td>8</td>
          <td>8.5</td>
          <td>9</td>
          <td>9.5</td>
        </tr>
        <tr>
          <td class="fix">Long Sleeve</td>
          <td>26</td>
          <td>26.5</td>
          <td>27</td>
          <td>27.5</td>
          <td>28</td>
        </tr>
      </tbody>
    </table>`;
  const close = modalClose('button--secondary', 'size-guide');

  return `
    ${title}
    ${body}
    ${close}
  `;
};

const youtube = data => {
  const { modalData: youtubeId } = data;
  const title = modalTitle``;
  const body = `
    <div class="oo-modal-body">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
  const close = modalClose('button--secondary', 'not-enough-inventory');

  return `
    ${title}
    ${body}
    ${close}
  `;
};


export default {
  ['youtube']: youtube,
  ['size-guide']: sizeGuide,
  ['free-shipping']: freeShipping,
  ['not-enough-inventory']: notEnoughInventory,
};
