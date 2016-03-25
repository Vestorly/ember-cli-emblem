var extension = require('../../lib/extension');

module.exports = {
  description: 'Generate an emblem template',
  availableOptions: [extension.cliOption],
  afterInstall: extension.afterInstall,
};
