var gulp = require('gulp');
var sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('sass-rtl', function(){
  return gulp.src('sass/main-rtl.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css/rtl'))
});

gulp.task('sass-ltr', function(){
  return gulp.src('sass/main.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'));
});


gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass-rtl', 'sass-ltr']); 
});

gulp.task('connect', function() {
  connect.server({
    port: 8001
  });
});


gulp.task('default', ['watch', 'connect']);