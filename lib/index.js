var fs = require('fs');

function generateStructure(){
  var structure = {
    './' : { 
        exec: function (scope, cb) {        
        console.log('Running generator (sails-generate-test) @ `'+scope.rootPath+'`...');
        cb();
      }
    }
  };

  if(!fs.existsSync('./test/README.md')){
    structure['./test/README.md'] = { template: 'README.md' };
  }

  if(!fs.existsSync('./config/env/test.js')){
    structure['./config/env/test.js'] = { template: 'config/env/test.js' };
  }

  if(!fs.existsSync('./test/bootstrap.test.js')){
    structure['./test/bootstrap.test.js'] = { template: 'test/bootstrap.test.js' };
  }

  // mocha options
  if(!fs.existsSync('./test/mocha.opts')){
    structure['./test/mocha.opts'] = { template: 'test/mocha.opts' };
  }
  
  // unit test file structure
  if(!fs.existsSync('./test/integration/blueprints/.gitkeep')){
    structure['./test/integration/blueprints/.gitkeep'] = { template: '.gitkeep' };
  }

  if(!fs.existsSync('./test/integration/controllers/.gitkeep')){
    structure['./test/integration/controllers/.gitkeep'] = { template: '.gitkeep' };
  }

  if(!fs.existsSync('./test/integration/models/.gitkeep')){
    structure['./test/integration/models/.gitkeep'] = { template: '.gitkeep' };
  }

  if(!fs.existsSync('./test/integration/policies/.gitkeep')){
    structure['./test/integration/policies/.gitkeep'] = { template: '.gitkeep' };
  }
 
  if(!fs.existsSync('./test/integration/responses/.gitkeep')){
    structure['./test/integration/responses/.gitkeep'] = { template: '.gitkeep' };
  }

  if(!fs.existsSync('./test/integration/services/.gitkeep')){
    structure['./test/integration/services/.gitkeep'] = { template: '.gitkeep' };
  }

  if(!fs.existsSync('./test/fixtures/.gitkeep')){
    structure['./test/fixtures/.gitkeep'] = { template: '.gitkeep' };
  }
 
  //add unit test to grunt tasks
  if(!fs.existsSync('./tasks/config/mocha_istanbul.js')){
    structure['./tasks/config/mocha_istanbul.js'] = { template: 'tasks/config/mocha_istanbul.js' };
  }

  if(!fs.existsSync('./tasks/register/test.js')){
    structure['./tasks/register/test.js'] = { template: 'tasks/register/test.js'};
  }
  
  // unit test for api <apiname>
  structure['./test/integration/models/:filename'] = {template: 'api/models/model.template'};
  structure['./test/integration/controllers/:filename'] = {template: 'api/controllers/controller.template'};

  //console.log(structure);
  return structure;
}

module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: require('./before'),

  targets: generateStructure()

};
