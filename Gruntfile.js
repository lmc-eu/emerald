/*global module:false*/
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.initConfig({
    less: {
      dist: {
        options: {
          strictMath: true,
          strictUnits: true,
          report: 'gzip'
        },
        files: {
          'css/emerald.css': 'less/emerald.less'
        }
      }
    },
    csslint: {
      strict: {
        options: {
          'box-model': false,
          'box-sizing': false,
          'known-properties': false
        },
        src: ['css/emerald.css']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['less', 'csslint']);

};

