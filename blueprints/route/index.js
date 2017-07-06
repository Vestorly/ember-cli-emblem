var ancestralBlueprint = require('../../lib/ancestral-blueprint');

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
    }
  ],

  _fixBlueprint: function(options) {
    var blueprint = ancestralBlueprint('route', this.project);
    blueprint.ui = options.ui;
    return blueprint;
  },

  fileMapTokens: function() {
    return ancestralBlueprint('route', this.project).fileMapTokens();
  },

  beforeInstall: function(options) {
    return ancestralBlueprint('route', this.project).beforeInstall(options);
  },

  shouldTouchRouter: function(name) {
    return ancestralBlueprint('route', this.project).shouldTouchRouter(name);
  },

  afterInstall: function(options) {
    return this._fixBlueprint(options).afterInstall(options);
  },

  beforeUninstall: function(options) {
    return ancestralBlueprint('route', this.project).beforeUninstall(options);
  },

  afterUninstall: function(options) {
    return this._fixBlueprint(options).afterUninstall(options);
  },

  locals: function(options) {
    return ancestralBlueprint('component', this.project).locals(options);
  },
  fileMapTokens: function() {
    return ancestralBlueprint('component', this.project).fileMapTokens();
  }
};
