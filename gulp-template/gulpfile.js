var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify2'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    hash = require('gulp-hash'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('src/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/style/'))
        .pipe(notify({ message: 'normalize css file was successfully build!'}));
});


gulp.task('production-sass', function() {
  return gulp.src('src/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(hash())
        .pipe(hash.manifest('asset-hashes.json')) 
        .pipe(gulp.dest('production/style/'))
        .pipe(notify({ message: 'production css file was successfully build!'}));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(browserify({
          fileName: 'bundle.js',
          transform: require('6to5ify'),
          options: {
            debug: false
          }
        })
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(notify({ message: 'normalize js file was successfully build!'}));
});

gulp.task('production-js', function() {
  return gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
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
        .pipe(sourcemaps.write('.'))
        .pipe(hash())
        .pipe(hash.manifest('asset-hashes.json')) 
        .pipe(gulp.dest('production/js/'))
        .pipe(notify({ message: 'production js file was successfully build!'}));
});

gulp.task('default', function() {
  gulp.start('sass', 'js');
});

gulp.task('watch', function() {
  gulp.watch('src/style/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
});

gulp.task('production', function() {
  gulp.start('production-sass', 'production-js');
});
