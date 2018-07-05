var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
 
gulp.task('minijs', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('minicss', function() {
  return gulp.src('css/*.css')
    .pipe(concatCss("all.css"))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('build/css/'));
});
 
gulp.task('default', function() {

});
