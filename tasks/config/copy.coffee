#
# grunt-contrib-copy
# https://github.com/gruntjs/grunt-contrib-copy
#
# @author Eric Clifford
#
module.exports = 
  assets:
    expand: true
    dot: true
    cwd: '<%= options.basePath %>'
    src: ['**/*.{html,jsp,js,css}', '!**/vendor/**/*']
    dest: '<%= options.tempDir %>'

