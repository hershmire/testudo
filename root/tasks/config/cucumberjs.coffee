module.exports = (grunt) ->
  src: "<%= grunt.settings.paths.basePath %>/tests/acceptance/features"
  options:
    steps: "<%= grunt.settings.paths.basePath %>/tests/acceptance/step_definitions"
    format: "pretty"
