 module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
            dist: {
		files: [{
		    expand: true,
		    src: ['*.js'],
		    cwd: 'js/',
		    dest: 'dist/js/'
		}, {
		    expand: true,
		    src: ['*.js'],
		    cwd: 'views/js/',
		    dest: 'dist/views/js/'
		}]
            }
	},
    cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }]
            }
        },
    htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true
            },
            files: {
              'dist/project-2048.html': 'src/project-2048.html',
              'dist/project-mobile.html': 'src/project-mobile.html',
              'dist/project-webperf.html': 'src/project-webperf.html'
            }
          }
          },
    imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'views/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            },
        },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'imagemin']);

};
