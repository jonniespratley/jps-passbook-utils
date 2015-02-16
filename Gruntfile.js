'use strict';

module.exports = function (grunt) {
	
	var files = 'lib/**/*.js';
	var tests = 'test/**/*-spec.js';
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
  	config: {
			testDir: 'test',
			coverage: 'coverage',
			dev: {
				options: {
					variables: {
						'repo': 'DSP-SNAPSHOT',
						'version': 'SNAPSHOT'
					}
				}
			},
			prod: {
				options: {
					variables: {
						'repo': 'DSP',
						'version': '<%= pkg.version %>'
					}
				}
			}
		},
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      }
    },
    mochaTest: {
			test: {
				options: {
					timeout: 5000,
					reporter: 'spec',
					require: 'test/blanket'
				},
				src: [tests]
			},
			coverage: {
				options: {
					reporter: 'html-cov',
					quiet: true,
					captureFile: 'coverage/coverage.html'
				},
				src: [tests]
			}
		},
		env: {
			coverage: {
				APP_DIR_FOR_CODE_COVERAGE: 'coverage/instrument/'
			}
		},
		instrument: {
			files: files,
			options: {
				lazy: true,
				basePath: '<%= config.coverage %>/instrument/'
			}
		},
		storeCoverage: {
			options: {
				dir: '<%= config.coverage %>/reports'
			}
		},
		makeReport: {
			src: '<%= config.coverage %>/reports/**/*.json',
			options: {
				type: ['lcov', 'html'],
				dir: '<%= config.coverage %>/reports',
				print: 'detail'
			}
		}
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest']);

};
