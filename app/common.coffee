#
# Set RequireJS common aliases and shims
#
# @author Eric Clifford
#
require.config
  baseUrl: './'

  paths:
    backbone: "vendor/bower_components/backbone-amd/backbone"
    underscore: "vendor/bower_components/underscore-amd/underscore"
    'backbone.wreqr':
      "vendor/bower_components/backbone.wreqr/lib/amd/backbone.wreqr"
    "backbone.babysitter":
      "vendor/bower_components/backbone.babysitter/lib/amd/backbone.babysitter"
    marionette:
      "vendor/bower_components/marionette/lib/core/amd/backbone.marionette"
    bronson: "vendor/bower_components/bronson/bronson"
    bootstrap: "vendor/bower_components/sass-bootstrap/js/"
    jquery: "vendor/bower_components/jquery/jquery"
    text: "vendor/bower_components/requirejs-text/text"

  shim:
    bootstrap:
      deps: ["jquery"]

