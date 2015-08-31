var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify2'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('src/style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/style/'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(browserify({
          fileName: 'bundle.js',
          transform: require('6to5ify'),
          options: {
            debug: false
          }
        })
        )
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('production-js', function() {
  return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(browserify({
          fileName: 'bundle.js',
          transform: require('6to5ify'),
          options: {
            debug: false
          }
        })
        )
        .pipe(uglify())
        .pipe(gulp.dest('production/js/'));
});
