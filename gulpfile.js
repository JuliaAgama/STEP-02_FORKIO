;

const   gulp = require('gulp');
const   sass = require('gulp-sass');
const   browserSync = require('browser-sync');
const   concat = require('gulp-concat');
const   uglify = require('gulp-uglify');
const   cleanCss = require('gulp-clean-css');
const   rename = require('gulp-rename');

/*********** BROWSER SYNC **********/

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});


/*********** STYLES PROCESSING **********/

gulp.task('styles', function() {
    return gulp.src('src/scss/style.scss')
    .pipe(browserSync.reload({stream: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/scss/'))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css/'))
    });

/*********** SCRIPTS PROCESSING **********/

gulp.task('scripts', function() {
    return gulp.src('src/js/sections/**/*.js')
        .pipe(browserSync.reload({ stream: true }))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('src/js/'))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('script-libs', function() {
    return gulp.src('src/js/libs/**/*.js')
        .pipe(browserSync.reload({ stream: true }))
        .pipe(concat('script-libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

/*********** HTML PROCESSING **********/

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(browserSync.reload({ stream: true }))
});


/*********** WATCHERS **********/

gulp.task('watch', function() {
    // gulp.watch('./*.html', gulp.parallel('html'));
    gulp.watch('src/scss/**/*.scss', gulp.parallel('styles'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts', 'script-libs'));
});


/*********** СБОРЩИК ТАСКОВ dev **********/

gulp.task('dev', gulp.parallel('watch', 'browser-sync'));


