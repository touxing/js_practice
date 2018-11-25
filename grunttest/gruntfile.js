module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            files: ['src/test.js'],
            build: {
                src: 'src/test.js',
                dest: 'build/<%= pkg.name %>.min.js'
              }
        }
    });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);
}