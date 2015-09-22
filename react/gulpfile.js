var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require("browserify"),
    babelify = require("babelify"),
    source = require("vinyl-source-stream");

gulp.task('sass', function() {
  return gulp.src('src/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/style/'))
        .pipe(notify({ message: 'normal css file was successfully build!'}));
});


gulp.task('jsx', function(){
  return browserify('src/js/app.jsx')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', function() {
  gulp.start('sass', 'jsx');
});

/**
 * 监视任务
 * 监视文件的变化并运行相应的程序
 * @return {file}   按下F5刷新浏览器就可以了
 */
gulp.task('watch', function() {
  gulp.watch('src/style/*.scss', ['sass']);
  gulp.watch('src/js/*.jsx', ['jsx']);
});