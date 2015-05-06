var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
    nodemon({
        script: 'server.js',
        ext: 'js'
    });
});

gulp.task('default', [
    'develop'
]);