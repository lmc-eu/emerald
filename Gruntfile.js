/*global module:false*/
module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        less: {
            dist: {
                options: {
                    strictMath: true,
                    strictUnits: true
                },
                files: {
                    'css/emerald.css': 'less/emerald.less'
                }
            }
        },
        legacssy: {
            dist: {
                files: {
                    'css/emerald-legacy.css': 'css/emerald.css'
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
        },
        cssmin: {
            minify: {
                options: {
                    report: 'gzip'
                },
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['less', 'legacssy', 'csslint', 'cssmin']);

};

