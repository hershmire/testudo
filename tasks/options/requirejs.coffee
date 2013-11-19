#
# grunt-contrib-requirejs
# https://github.com/gruntjs/grunt-contrib-requirejs
#
# @author Eric Clifford
#
module.exports =
  # Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
  dist:
    options:
      # appDir: '<%= options.tempDir %>'
      baseUrl: '<%= options.tempDir %>'
      mainConfigFile: "<%= options.tempDir %>/main.js"
      dir: "<%= options.buildDir %>"
      removeCombined: true
      preserveLicenseComments: false
      useStrict: true
      optimize: "uglify2"
      findNestedDependencies: true 
      wrap: true

      # AMD Modules
      modules: [
        name: 'main'
      ,
        name: 'modules/moduleA/main'
        exclude: ['main']
      ]
