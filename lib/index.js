var fs = require('fs');
var fsUtils = require('nodejs-fs-utils');
var dirs =[
  './test/integration/blueprints',
  './test/integration/controllers',
  './test/integration/models',
  './test/integration/policies',
  './test/integration/responses',
  './test/integration/services',
  './test/fixtures'
];

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

   //add unit test to grunt tasks
  if(!fs.existsSync('./tasks/config/mocha_istanbul.js')){
    structure['./tasks/config/mocha_istanbul.js'] = { template: 'tasks/config/mocha_istanbul.js' };
  }

  if(!fs.existsSync('./tasks/register/test.js')){
    structure['./tasks/register/test.js'] = { template: 'tasks/register/test.js'};
  }
  
  // unit test file structure
  for (var i = 0; i < dirs.length; i++) {
    if(!fs.existsSync(dirs[i])){          
      structure[dirs[i] + '/.gitkeep'] = { template: '.gitkeep' };
    }
    else if(fs.readdirSync(dirs[i]).length <=0 ){      
      structure[dirs[i] + '/.gitkeep'] = { template: '.gitkeep' };
    }    
  }
    
  // unit test for api <apiname>
  structure['./test/integration/models/:modelFilename'] = {template: 'api/models/model.template'};
  structure['./test/integration/controllers/:controllerFilename'] = {template: 'api/controllers/controller.template'};

  //console.log(structure);
  return structure;
}

module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: require('./before'),

  targets: generateStructure()

};
