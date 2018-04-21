var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

gulp.task('default', ['js', 'css', 'html', 'img', 'watch']);

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/sass/*.sass', ['css']);
});

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
				.pipe(concat('app.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('public/js'))
});

gulp.task('css', function () {
  var processors = [autoprefixer({browsers: ['last 5 version']})];
  return gulp.src('src/sass/*.sass')
        .pipe(sass(({outputStyle: 'compressed'})))
        .pipe(postcss(processors))
        .pipe(gulp.dest('public/css'))
        .pipe(livereload({ start: true }))
});

gulp.task('html', function(){
  return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public/'))
        .pipe(livereload({ start: true }))
});

gulp.task('img', function(){
  gulp.src('src/**/*.png')
        .pipe(gulp.dest('public/'))
  gulp.src('src/**/*.jpg')
        .pipe(gulp.dest('public/'))
});
