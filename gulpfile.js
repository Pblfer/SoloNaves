var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');




gulp.task('images', function(){
  return gulp.src('www/app/img/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(imagemin({
      // Setting interlaced to true
      interlaced: true
    }))
  .pipe(gulp.dest('dist/images'))
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'www/'
    },
  })
});

gulp.task('watch', ['browserSync'], function (){
  
   
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('www/**/*.html', browserSync.reload);
  gulp.watch('www/app/css/**/*.css', browserSync.reload);     
});

