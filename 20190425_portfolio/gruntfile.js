module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            dist: {
                files: {
                    'build/css/styles.css' : 'src/scss/main.scss'
                }
            }
        },

        import_js: {
            files: {
                expand: true,
                cwd: 'src/js/',
                src: ['**/*.js'],
                dest: 'build/js/',
                ext: '.js'
            }
        },

        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['import_js'],
            },
            scss: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass'],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-import-js');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','import_js','watch']);
};