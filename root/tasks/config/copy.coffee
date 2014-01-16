#
# grunt-contrib-copy
# https://github.com/gruntjs/grunt-contrib-copy
#
module.exports = (grunt) ->
  assets:
    expand: true
    dot: true
    cwd: '<%= grunt.settings.paths.basePath %>'
    src: [
      '**/*'
      '!{vendor,_*}/**/*'
      '!**/*.{coffee,scss,sass,feature,md}'
    ]
    dest: '<%= grunt.settings.paths.tempDir %>'
