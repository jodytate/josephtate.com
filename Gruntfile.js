/*global module:false*/
module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>'
    },
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: ['css/josephtate.css','css/font-awesome.css'],
        dest: 'css/styles.css',
      },
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['styles.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },
    sass: {
      dist: {
        files: {
          'css/styles.css': 'css/styles.scss',
        }
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'sass'
    }
  });

  // Default task.
  grunt.registerTask('default', 'sass concat cssmin');

};
