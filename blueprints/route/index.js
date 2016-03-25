var extension = require('../../lib/extension');

module.exports = {
  description: 'Generates a route and registers it with the router',

  availableOptions: [
    {
      name: 'type',
      type: String,
      values: ['route', 'resource'],
      default: 'route',
      aliases:[
        {'route': 'route'},
        {'resource': 'resource'}
      ]
    },
    {
      name: 'path',
      type: String,
      default: ''
    },
    extension.cliOption
  ],

  afterInstall: extension.afterInstall,

  _fixBlueprint: function(options) {
    var blueprint = this.lookupBlueprint('route');
    blueprint.ui = options.ui;

    return blueprint;
  },

  fileMapTokens: function() {
    return this.lookupBlueprint('route').fileMapTokens();
  },

  beforeInstall: function(options) {
    return this.lookupBlueprint('route').beforeInstall(options);
  },

  shouldTouchRouter: function(name) {
    return this.lookupBlueprint('route').shouldTouchRouter(name);
  },

  afterInstall: function(options) {
    return this._fixBlueprint(options).afterInstall(options);
  },

  beforeUninstall: function(options) {
    return this.lookupBlueprint('route').beforeUninstall(options);
  },

  afterUninstall: function(options) {
    return this._fixBlueprint(options).afterUninstall(options);
  }
};
