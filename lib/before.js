/**
 * Module dependencies
 */

var util = require('util'),
  _ = require('lodash'),
  fs = require('fs'),
  path = require('path');

// Make _.defaults recursive
_.defaults = require('merge-defaults');
_.str = require('underscore.string');
 

/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

  // Make sure we're in the root of a Sails project.
  var pathToPackageJSON = path.resolve(scope.rootPath, 'package.json');
  var package, invalidPackageJSON;
  try {
    package = require(pathToPackageJSON);
  } catch (e) {
    invalidPackageJSON = true;
  }

  if (invalidPackageJSON) {
    return cb.invalid('Sorry, this command can only be used in the root directory of a Sails project.');
  }

  // scope.args are the raw command line arguments.
  //
  // e.g. if you run:
  // sails generate test user  
  //
  _.defaults(scope, {
    id: _.str.capitalize(scope.args[0])
  });

  if (!scope.rootPath) {
    return cb.invalid('Usage: sails generate test <apiname>');
  }

  if (!scope.id) {
    return cb.invalid('Usage: sails generate test <apiname>');
  }

  //
  // Determine default values based on the
  // available scope.
  //
  _.defaults(scope, {
    globalID: _.str.capitalize(scope.id)
  });

  // Take another pass to take advantage of
  // the defaults absorbed in previous passes.
  _.defaults(scope, {
    rootPath: scope.rootPath,
    filename: scope.globalID + '.test.js'
  });

  // Trigger callback with no error to proceed.
  return cb.success();
};
