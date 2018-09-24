const directoryExists = require('directory-exists');

const exists = async (path) => {
  return await directoryExists(path);
};

module.exports = { exists };