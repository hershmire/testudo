/*
 * testudo
 * https://github.com/ecliffords/testudo
 *
 */

'use strict';

// Description as it shows up in the available templates in `grunt-init`
exports.description = 'Create a Testudo project.';

// Optional project notes
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_, _bower install_ and finally _bundle install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about the available grunt commands refer to documentation below. ' +
  '\n\n' +
  'https://github.com/eclifford/testudo';

exports.warnOn = "*";

exports.template = function(grunt, init, done) {

  // Helper to create a "yes/no" question.
  function yn(o) {
    o = grunt.util._.defaults({}, o, {
      default: true,
      warning: 'You must answer [y]es or [n]o.',
    });
    var defaultYes = o.default === true || String(o.default).toLowerCase() === 'y' || String(o.default)[0] === 'Y';
    o.default = defaultYes ? 'Y/n' : 'y/N';
    o.sanitize = function(value, data, done) {
      data[o.name] = defaultYes ? /y/i.test(value) : !/n/i.test(value);
      done();
    };
    return o;
  }

  init.process({}, [
    init.prompt("name", "testudo"),
    init.prompt("description", "the best testudo project ever."),
    init.prompt("version"),
    init.prompt("repository"),
    init.prompt("homepage"),
    init.prompt("author_name"),

    yn({
      'name': 'include_demo_files',
      'message': 'Do you want to include demo files? If yes then please accept all default library selections.',
      'default': true
    }),

    yn({
      'name': 'include_bronson',
      'message': 'Do you want to include BronsonJS?',
      'default': true
    }),

    yn({
      'name': 'include_backbone',
      'message': 'Do you want to include AMD Backbone and Underscore?',
      'default': true
    }),

    yn({
      'name': 'include_marionette',
      'message': 'Do you want to include AMD Marionette?',
      'default': true
    }),

    init.prompt("licenses", "MIT")
  ], function(err, props) {

    props.keywords = [];

    props.devDependencies = {
      "grunt": "~0.4.2",
      "grunt-contrib-copy": "~0.5.0",
      "grunt-contrib-connect": "~0.5.0",
      "grunt-contrib-clean": "~0.5.0",
      "grunt-contrib-requirejs": "~0.4.1",
      "grunt-contrib-watch": "~0.5.3",
      "grunt-contrib-coffee": "~0.8.0",
      "karma": "~0.10.9",
      "karma-script-launcher": "~0.1.0",
      "karma-chrome-launcher": "~0.1.0",
      "karma-firefox-launcher": "~0.1.0",
      "karma-html2js-preprocessor": "~0.1.0",
      "karma-requirejs": "~0.1.0",
      "karma-coffee-preprocessor": "~0.1.0",
      "karma-phantomjs-launcher": "~0.1.0",
      "karma-coverage": "~0.1.1",
      "karma-mocha": "~0.1.0",
      "grunt-karma": "~0.6.2",
      "grunt-concurrent": "~0.4.2",
      "load-grunt-tasks": "~0.2.1",
      "glob": "~3.2.8",
      "grunt-coffeelint": "0.0.8",
      "karma-sinon-chai": "~0.1.4",
      "karma-chai-jquery": "~0.1.0",
      "grunt-contrib-symlink": "~0.2.0",
      "grunt-contrib-sass": "~0.6.0",
      "grunt-include-replace": "~1.2.0",
      "grunt-selenium-launcher": "~0.1.1",
      "grunt-cucumber": "git://github.com/eclifford/grunt-cucumber-js#9209fd7a8a950d7a843bd41c8eb0713f850c6d51",
      "wd": "~0.2.8",
      "chai": "~1.8.1",
      "chai-as-promised": "~4.1.0",
      "nconf": "~0.6.9"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);
    init.copyAndProcess(files, props);
    init.writePackageJSON('package.json', props);


    var bowerDevDependencies = {
      "jquery": "~1.10.2",
      "modernizr": "~2.6.2",
      "requirejs": "~2.1.9",
      "requirejs-tpl": "latest",
      "sass-bootstrap": "~3.0.0"
    };

    if (props.include_demo_files) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        'gmaps': '~0.4.8'
      });
    }

    if (props.include_bronson) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        'bronson': '~2.0.12'
      });
    }

    if (props.include_backbone) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        "backbone-amd": "~1.1.0",
        "underscore-amd": "~1.5.2"
      });
    }

    if (props.include_marionette) {
      bowerDevDependencies = grunt.util._.extend(bowerDevDependencies, {
        "marionette": "~1.2.3",
        "backbone.wreqr": "~0.2.0",
        "backbone.babysitter": "~0.0.6"
      });
    }

    init.writePackageJSON('bower.json', {
      name: props.name,
      version: '0.0.0',
      devDependencies: bowerDevDependencies
    });

    done();

  });
};