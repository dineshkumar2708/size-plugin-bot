const getConfig = require('probot-config');

function toMap(arr, propertyname) {
  return arr.reduce((agg, item) => {
    const property = item[propertyname];
    // eslint-disable-next-line no-param-reassign
    agg[property] = item;
    return agg;
  }, {});
}
async function getFileFromConfig(context) {
  const botConfig = await getConfig(context, 'size-plugin.yml');
  const sizefilepaths = botConfig && botConfig['size-files'].map(filename => ({ filename, commented: false }));
  return sizefilepaths;
}
module.exports = { toMap, getFileFromConfig };
