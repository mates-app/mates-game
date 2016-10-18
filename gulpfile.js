/**
 * Created by josecullen on 04/09/16.
 */

var gulp = require('gulp')

gulp.task('copy:assets', [], function() {
    return gulp.src([
        'app/**/*',
        'index.html',
        'styles.css',
        '!app/**/*.ts',
        '!app/**/*.js',
        '!app/**/*.map',

    ], { base : './src' })
        .pipe(gulp.dest('dist/app'))
});