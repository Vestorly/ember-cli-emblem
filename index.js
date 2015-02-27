/* jshint node: true */
'use strict';

var Filter = require('broccoli-filter');
var checker = require('ember-cli-version-checker');

function TemplateCompiler (inputTree, options) {
  if (!(this instanceof TemplateCompiler)) {
    return new TemplateCompiler(inputTree, options);
  }

  Filter.call(this, inputTree, options); // this._super()

  this.options = options || {};
  this.inputTree = inputTree;

  this.compile = this.options.emblemCompiler || require('emblem').default.compile;
}

TemplateCompiler.prototype = Object.create(Filter.prototype);
TemplateCompiler.prototype.constructor = TemplateCompiler;
TemplateCompiler.prototype.extensions = ['embl', 'emblem'];
TemplateCompiler.prototype.targetExtension = 'hbs';

TemplateCompiler.prototype.processString = function (string, relativePath) {
  console.log('processing template: '+string);
  return this.compile(string);
}

module.exports = {
  name: 'ember-cli-emblem-hbs-printer',
  shouldSetupRegistryInIncluded: function() {
    return !checker.isAbove(this, '0.2.0');
  },
  setupPreprocessorRegistry: function(type, registry) {
    var compiler = {
      toTree: function(tree) {
        return TemplateCompiler(tree);
      }
    };
    registry.add('template', compiler, 'ember-cli-emblem-hbs-printer', ['embl', 'emblem']);
  },
  included: function(app){
    this._super.included.apply(this, arguments);
    if (this.shouldSetupRegistryInIncluded()) {
      this.setupPreprocessorRegistry('parent', app.registry);
    }
  }

};
