var gulp = require('gulp');
  connect = require('gulp-connect'),
  less = require('gulp-less');
var gulp = require('gulp'),
    livereload = require('gulp-livereload');


gulp.task('server', function () {
  connect.server({
    livereload: true
  });
});
 

/*
gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
*/

gulp.task('less',function(){
    gulp.src('dist/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload());
});

gulp.task('html', function(){
     gulp.src('*.html')
     .pipe(connect,reload());
});


gulp.task('watch', function() {
    gulp.watch('dist/less/*.less', ['less']);
    gulp.watch('*.html', ['html']);
});




gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('bower_components/'))
});

/*
gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(css())
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen(); //要在这里调用listen()方法
  gulp.watch('css/*.css', ['css']);
}); */

gulp.task('default', ['less','server','watch']);





