/**
 * sails-generate-auth
 *
 * Usage:
 * `sails generate auth`
 *
 * @type {Object}
 */
module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: require('./before'),

  targets: {
    './': {
      exec: function (scope, cb) {
        console.log('Running generator (sails-generate-test) @ `'+scope.rootPath+'`...');
        cb();
      }
    },

    // unit test readme
    './test/README.md': { template: 'README.md' },   

    //unit test environment
    './config/env/test.js': { template: 'config/env/test.js' },

    // test bootstrap
    './test/bootstrap.test.js': { template: 'test/bootstrap.test.js' },

    // mocha options
    './test/mocha.opts': { template: 'test/mocha.opts' },    

    // unit test file structure
    './test/blueprints/.gitkeep' : { template: '.gitkeep' }, 
    './test/controllers/.gitkeep' : { template: '.gitkeep' }, 
    './test/models/.gitkeep' : { template: '.gitkeep' }, 
    './test/policies/.gitkeep' : { template: '.gitkeep' }, 
    './test/responses/.gitkeep': { template: '.gitkeep' }, 
    './test/services/.gitkeep' : { template: '.gitkeep' }, 

    //add unit test to grunt tasks
    './tasks/config/mocha_istanbul.js': { template: 'tasks/config/mocha_istanbul.js'},
    './tasks/register/test.js': { template: 'tasks/register/test.js'},

     // unit test for api <apiname>
    './test/models/:filename': { template: 'api/models/model.template' },    
    './test/controllers/:filename': { template: 'api/controllers/controller.template' }
  }
};
