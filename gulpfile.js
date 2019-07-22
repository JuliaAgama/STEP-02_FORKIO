;

const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        watch = require('gulp-watch')
        browserSync = require('browser-sync');


/*********** BROWSER SYNC **********/

// gulp.task('browser-sync', function() {
//     browserSync({
//         server: {
//             baseDir: 
//         }
//     });
// })


/*********** style from src to dist **********/

gulp.task('styles', function() {
    return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
    // .pipe(browserSync.reload({stream: true}));
    });

/



/*********** WATCHERS **********/
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('styles'))
})

