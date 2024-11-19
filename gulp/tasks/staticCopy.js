const gulp = require('gulp')

module.exports = function staticCopy() {
  return gulp.src('src/static/**/*')
    .pipe(gulp.dest('build/static'))
}
