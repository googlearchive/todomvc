module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            bower: ['bower_components'],
            dist: ['dist']
        },

        env: {
            options: {},
            dev: {
                NODE_ENV: 'development',
                //src: 'config/development.json'
            }
        },

        bower: {
            install: {
                options: {
                    targetDir: './bower_components',
                    install: true,
                    verbose: false,
                    copy: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            css: {
                src: 'app/css/*.css',
                dest: 'dist/public/combined/app.css',
            },
            js: {
                src: 'app/**/*.js',
                dest: 'dist/public/combined/app.js',
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'server.js',
                'routes.js',
                'app/**/*.js',
                'test/**/*.js'
            ]
        },

        cssmin: {
            all: {
                files: {
                    'dist/public/css/app.min.css': ['dist/public/combined/app.css'],
                }
            }
        },

        uglify: {
            all: {
                files: [{
                    'dist/public/js/app.min.js': ['dist/public/combined/app.js']
                },{
                    expand: true,
                    cwd: 'bower_components',
                    src: '**/*.js',
                    dest: 'dist/public/js/lib'
                }],
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */',
                    mangle: false,
                    compress: {
                        drop_console: true
                    }
                }
            }
        },

        compress: {
            dist: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                files: [{
                    expand: true,
                    cwd: 'app/elements/',
                    src: ['**'],
                    dest: 'dist/public/elements'
                },{
                    src: [
                        'index.html',
                        'routes.js',
                        'worker.js',
                        'cluster.js',
                        'config/index.js',
                        'config/config.example.json',
                        'dist/public/js/*.js',
                        'dist/public/css/*.css',
                        'node_modules/hapi/**',
                        'node_modules/cluster-master/**',
                        'bower_components/**'
                    ]
                }]
            }
        },

        vulcanize: {
            all: {
                options: {
                    strip: true
                },
                files: {
                    'index.html': 'app/main.html'
                }
            }
        },

        hapi: {
            custom_options: {
                options: {
                    server: require('path').resolve('./server')
                }
            }
        },

        watch: {
            dev: {
                files: [
                    'Gruntfile.js',
                    'server.js',
                    'routes.js',
                    'app/**/*.js',
                    'app/**/*.css',
                    'app/**/*.html'
                ],
                tasks: [
                    'clean:dist',
                    'jshint',
                    'concat:css',
                    'cssmin:all',
                    'concat:js',
                    'uglify:all',
                    'vulcanize:all'
                ],
                options: {
                    atBegin: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hapi');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-vulcanize');

    // task for initial setup
    grunt.registerTask('install', ['clean:bower', 'bower']);

    // task for development env setup
    grunt.registerTask('dev', ['env:dev', 'hapi', 'watch:dev']);

    // task for package setup
    grunt.registerTask('package', [
        'clean:bower',
        'bower',
        'clean:dist',
        'jshint',
        'concat:css',
        'cssmin:all',
        'concat:js',
        'uglify:all',
        'vulcanize:all',
        'compress:dist'
    ]);
};