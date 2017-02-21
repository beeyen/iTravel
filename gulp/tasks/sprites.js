var gulp = require('gulp'),
    rename = require('gulp-rename'),
    svgSprite = require('gulp-svg-sprite'),
    del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};

gulp.task('clean', function() {
    return del(['./app/temp/sprite']);
});

gulp.task('createSprite', ['clean'], function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});

// this copy task did not work :(
gulp.task('copySpriteGraphic',  ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        pipe(gulp.dest('./app/assets/images'));
});

gulp.task('copySprite', ['createSprite'],  function() {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['clean', 'createSprite', 'copySprite']);
