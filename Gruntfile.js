/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-legacssy');    
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        less: {
            dist: {
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
    grunt.registerTask('default', ['less', 'legacssy', 'cssmin']);

};

