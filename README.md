# sails-generate-unittest

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

Generate a unit test for your Sails app. 

this a fork by [sails-generate-test](https://github.com/sailsjs/sails-generate-test)

## Install
```
npm install --save sails-generate-unittest
```

#### Modules to using for test: Mocha + Chai + Sinon + Supertest

* [chai](https://github.com/chaijs/chai)
* [mocha](https://github.com/mochajs/mocha)
* [sinon](https://github.com/sinonjs/sinon)
* [supertest](https://github.com/visionmedia/supertest)

#### Modules to using for code coverage tool: Istanbul
* [istanbul](https://github.com/gotwarlost/istanbul)

```
npm install -D chai mocha sinon supertest istanbul
```

### The unit tests will be executed out by a task Grunt <img height="56" src="http://gruntjs.com/img/grunt-logo-no-wordmark.svg">

#### Install Grunt and module for mocha + istanbul
```
npm install -D grunt grunt-mocha-istanbul
```

##### Or you can copy this piece of code in the file `package.json` and then run `npm install`

```json
{
  "devDependencies": {
    "chai": "^3.5.0",
    "grunt": "^1.0.1",
    "grunt-mocha-istanbul": "^5.0.1",
    "istanbul": "^0.4.3",
    "mocha": "^2.5.3",
    "sinon": "^1.17.4",
    "sinon-chai": "^2.8.0",
    "supertest": "^1.2.0"
  }
}
```

## we must modify the `.sailsrc` file and add the module Test:
```json
{
  "generators": {
    "modules": {
        "test": "sails-generate-unittest"
    }
  }
}
```

## once the modules installed, we can run the tests generator
```
sails generate test <apiname>
```
### `<apiname>` is the endpoint we want to test
for example, we have User module and User controller, the execution would be:
```
sails generate test User
```

## The end result will be the generation of the following structure test

    test                        - Root directory for test
    ├── blueprint               - Test directory for Blueprint
    ├── controller              - Test directory for controllers
    ├── models                  - For Models
    ├── polices                 - For Polices
    ├── services                - For Services
    ├── README.md               - README file
    ├── bootstrap.test.js       - Load sails to test
    └── moncha.opts             - Mocha configurations
    
## Gruntjs tasks to be created

    task
    ├── config
    │   └── mocha_istanbul.js   - Mocha and Istanbul coverage configuration
    └── register
        └── test.js             - Task for to run test
        
        
## Creating test environment

    config
    └── env
        └── test.js             - Test environment

### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
