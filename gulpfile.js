;

const   gulp = require('gulp'),
        sass = require('gulp-sass');



// pipe style from src to dist:
gulp.task('styles', function() {
    return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
    // .pipe(browserSync.reload({stream: true}));
    });





/*********** WATCHERS **********/


