const browserSync = require('browser-sync');
const gulp = require('gulp');
const sass = require('gulp-sass');
const reload = browserSync.reload;

gulp.task('sass', function () {
  gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./styles'));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '/'
    }
  });
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('watch', function() {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);