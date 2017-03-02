var gulp = require('gulp'),
imageMin = require('gulp-imagemin'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
del = require('del'),
browserSync = require('browser-sync').create();


gulp.task('preview', function() {
      browserSync.init({
          notify: false,
          server: {
              baseDir: 'dist/'
          }
      });
});


gulp.task('deleteDistFolder', function(){
    return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**/*',
        '!./app/assets/scripts/**/*',
        '!./app/assets/styles/**/*',
        '!./app/temp',
        '!./app/temp/**',
        ];
    return gulp.src(pathToCopy)
        .pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons',  '!./app/assets/images/icons/**/*', './temp/sprite/**/*'])
        .pipe(imageMin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);
