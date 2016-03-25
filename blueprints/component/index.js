var extension = require('../../lib/extension');

module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',
  availableOptions: [extension.cliOption],
  afterInstall: extension.afterInstall,
  locals: function(options) {
    return this.lookupBlueprint('component').locals(options);
  },
  fileMapTokens: function() {
    return this.lookupBlueprint('component').fileMapTokens();
  }
};
