const fs = require('fs');
const path = require('path');
const iconNames = fs.readdirSync(path.resolve(__dirname, '../../../snippets/svg'))
  .filter(svgFilename => svgFilename.includes('icon-'))
  .map(iconFilename => iconFilename.replace('icon-', '').replace('.liquid', ''));
const options = iconNames.map(iconName => ({ value: `icon-${iconName}`, label: iconName }));


module.exports = () => ({
  type: 'select',
  id: 'icons',
  options,
  label: 'Icons',
});

