var gulp = require('gulp');
connect = require('gulp-connect');
var gulp = require('gulp'),
    livereload = require('gulp-livereload');


gulp.task('webserver', function() {
  connect.server();
});


gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('bower_components/'))
});

gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(css())
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen(); //要在这里调用listen()方法
  gulp.watch('css/*.css', ['css']);
});

gulp.task('default', ['webserver']);
