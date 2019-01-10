'use strict';

module.exports = {
  useYarn: true,
  scenarios: [
    {
      name: 'ember-default',
      dependencies: { }
    },
    {
      name: 'ember-lts-2.12',
      env: {
        EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
      },
      npm: {
        devDependencies: {
          '@ember/jquery': '^0.5.1',
          'ember-source': '~2.12.0'
        }
      }
    },
    {
      name: 'ember-lts-2.18',
      env: {
        EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
      },
      npm: {
        devDependencies: {
          '@ember/jquery': '^0.5.1',
          'ember-source': '~2.18.0'
        }
      }
    },
    {
      name: 'Ember 3.0.0',
      npm: {
        devDependencies: {
          'ember-source': '~3.0.0'
        }
      }
    }
  ]
};
