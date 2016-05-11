//Do: rename app.js to main.js, have concat create app.js
"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var maps = require('gulp-sourcemaps');
//var sass = require('gulp-sass');

//Combines multiple files into one file.
gulp.task('concatVendor', function() {
  return gulp.src([
      "/public/vendor/angular/angular.js",
      "/public/vendor/angular-animate/angular-animate.js",
      "/public/vendor/jquery/dist/jquery.js",
      "/public/vendor/parallax.js/parallax.js"
    ])
    .pipe(maps.init())
    .pipe(concat("vendor.bundle.js"))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('public/scripts'));
});

//gulp.task('compileSass', function() {
//  return gulp.src('styles/style-scss.scss')
//    .pipe(maps.init())
//    .pipe(sass())
//    .pipe(maps.write('./'))
//    .pipe(gulp.dest('styles'));
//});


////builds the distribution file for static files.
//gulp.task('build', function() {
//  return gulp.src(['js/app.js', 'img/**',
//                   'css/application.css', 'index.html'],
//  { base: './' })
//  .pipe(gulp.dest('public'));
//});


//Executes when I run gulp
gulp.task('default', function() {
  gulp.start('concatVendor');
});


