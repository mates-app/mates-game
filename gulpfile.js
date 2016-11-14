/**
 * Created by josecullen on 04/09/16.
 */
'use strict'
let gulp = require('gulp')
let minify = require('gulp-minify');
let filter = require('gulp-filter')
let clean  = require('gulp-clean')
let tsc    = require('gulp-tsc')

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
        'tmp/**/*.d.ts',
        'index.html',
        'styles.css',
        '!app/**/*.ts',
        '!app/**/*.js',
        '!app/**/*.map',
        
    ], { base : './src' })
        .pipe(gulp.dest('dist/app'))
});

gulp.task('minify:material', [], () => {
    return gulp.src('node_modules/@angular/material/material.umd.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('node_modules/@angular/material'))
})

gulp.task('minify:rxjs', [], () => {
    var filterJs = filter([
        'node_modules/rxjs/*.js',
        'node_modules/rxjs/add/**/*.js',
        'node_modules/rxjs/util/**/*.js',
        'node_modules/rxjs/symbol/**/*.js',
        'node_modules/rxjs/observable/**/*.js',
        'node_modules/rxjs/operator/**/*.js',
        'node_modules/rxjs/scheduler/**/*.js'
    ], {restore: true})
    return gulp.src('node_modules/rxjs/**/*')
        .pipe(filterJs)
        .pipe(minify({
            ext:{
                src:'orig.js',
                min:'.js'
            }
        }))
        .pipe(filterJs.restore)
        .pipe(gulp.dest('rxjs-min'))
})
