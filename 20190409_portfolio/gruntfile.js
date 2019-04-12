module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            dist: {
                files: {
                    'tmp/css/styles.css' : 'src/scss/main.scss'
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/styles.min.css': ['tmp/css/styles.css']
                }
            }
        },

        import_js: {
            files: {
                expand: true,
                cwd: 'src/js/',
                src: ['**/*.js'],
                dest: 'tmp/js/',
                ext: '.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'build/js/scripts.min.js': ['tmp/js/_scripts.js']
                }
            }
        },

        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['import_js','uglify'],
            },
            scss: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass','cssmin'],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-import-js');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','cssmin','import_js','uglify','watch']);
};