#
# grunt-contrib-watch
# https://github.com/gruntjs/grunt-contrib-watch
#
module.exports = (grunt) ->
  options:
    spawn: false
    cwd: '<%= grunt.settings.paths.basePath %>'
    livereload: grunt.settings.server.livereload

  coffee:
    files: [
      'modules/{,*/}/'
      'modules/**/*.coffee'
      'main.coffee'
    ]
    tasks: if grunt.settings.project.linting then ['coffeelint', 'coffee:dev'] else ['coffee:dev']

  sass:
    files: [
      'modules/{,*/}/'
      'modules/**/*.{scss,sass}'
      'main.{scss,sass}'
    ],
    tasks: ['sass:dev']

  assets:
    files: [
      'pages/{,*/}/'
      'pages/**/*.html'
      'index.html'
    ]
    tasks: ['includereplace']
