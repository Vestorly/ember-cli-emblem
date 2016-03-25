/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');
var defaults = require('lodash').defaults;

var defaultConfig = { extension: 'emblem' };

module.exports.cliOption = {
  name: 'extension',
  type: String,
  aliases: [
    {'emblem': 'emblem'},
    {'embl': 'embl'},
    {'em': 'em'}
  ]
};

function which(options) {
  if (options.extension) {
    return options.extension;
  } else {
    var config = defaults(
      options.project.config(process.env.EMBER_ENV).emblemOptions || {},
      defaultConfig
    );
    return config['extension'];
  }
}
module.exports.which = which;

function afterInstall(options) {
  var extension = which(options);

  if (extension === defaultConfig.extension) {
    return;
  }

  var fileMapTokens = this.fileMapTokens();
  var templatePath = fileMapTokens.__templatepath__(options);
  var templateName = fileMapTokens.__templatename__(options) || options.entity.name;

  // TODO: better path resolution
  var fullPath = path.join(options.target, templatePath, templateName);
  var from = fullPath + '.' + defaultConfig.extension;
  var to   = fullPath + '.' + extension;

  // TODO: what about uninstalls?
  fs.renameSync(from, to);
}
module.exports.afterInstall = afterInstall;
