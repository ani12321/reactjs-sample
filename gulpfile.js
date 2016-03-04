'use strict';

// requirements

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    size = require('gulp-size'),
    clean = require('gulp-clean');


// tasks

gulp.task('transform', function () {
  return gulp.src('./src/jsx/main.js')
    .pipe(browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./src/js/'))
    .pipe(size());
});

gulp.task('clean', function () {
  return gulp.src(['./src/js'], {read: false})
    .pipe(clean());
});

gulp.task('default', function () {
  gulp.start('clean');
  gulp.start('transform');
  gulp.watch('./src/jsx/*.js', ['transform']);
});
