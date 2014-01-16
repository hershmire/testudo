#
# grunt-coffeelint
# https://github.com/vojtajina/grunt-coffeelint
#
module.exports = (grunt) ->
  options:
    'max_line_length':
      'level': 'ignore'
  dev: [
    '<%= grunt.settings.paths.basePath %>/{modules,tests}/**/*.coffee'
  ]
