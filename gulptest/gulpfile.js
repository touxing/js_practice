/**
 * 1.全局安装
 * 2.本地安装
 * 3.使用gulp模块
 * 4.下载插件
 * 5.定义任务使用插件
 */

 let gulp = require('gulp');
 let jshint = require('gulp-jshint');
 let uglify = require('gulp-uglify');
 gulp.task('ooxx', function() {
     gulp.src('test.js')
     .pipe(uglify())
     .pipe(gulp.dest('build'))
 })