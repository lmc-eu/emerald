/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');

    // Project configuration.
    grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    less: {
        dist: {
            options: {
                compress: true,
                report: 'gzip'
            },
            files: {
                'css/emerald.css': 'less/emerald.less',
                'css/exp.css': 'less/exp.less'
            }
        }
    }
    });

    // Default task.
    grunt.registerTask('default', ['less']);

};

