module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    wp_readme_to_markdown: {
      target: {
        files: {
          '../wordpress-openid/README.md': '../wordpress-openid/readme.txt'
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-wp-readme-to-markdown');

  // Default task(s).
  grunt.registerTask('default', ['wp_readme_to_markdown']);
};
