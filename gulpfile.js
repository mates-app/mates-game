/**
 * Created by josecullen on 04/09/16.
 */

var gulp = require('gulp')
var minify = require('gulp-minify');

gulp.task('minify', [], () =>{
    return gulp.src('tmp/**/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            }
        }))
        .pipe(gulp.dest('dist'))
})

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