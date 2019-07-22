;

const   gulp = require('gulp');
const   sass = require('gulp-sass');
const   browserSync = require('browser-sync');
const   concat = require('gulp-concat');
const   uglify = require('gulp-uglify');
const   cleanCss = require('gulp-clean-css');

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
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/scss/'))
    .pipe(browserSync.reload({stream: true}));
    });

gulp.task('clean-css', function() {
    return gulp.src('src/scss/style.css')
        // .pipe(concat('style.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('styles-processing', gulp.series('styles', 'clean-css'));



/*********** SCRIPTS PROCESSING **********/

gulp.task('scripts', function() {
    return gulp.src('src/js/sections/**/*.js')
        .pipe(browserSync.reload({ stream: true }))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('src/js/'))
});

gulp.task('uglify-scripts', function() {
    return gulp.src('src/js/index.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('script-libs', function() {
    return gulp.src('src/js/libs/**/*.js')
        .pipe(browserSync.reload({ stream: true }))
        .pipe(concat('script-libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('scripts-processing', gulp.series('scripts', 'uglify-scripts', 'script-libs'));


/*********** HTML PROCESSING **********/

gulp.task('html', function() {
    return gulp.src('./*.html')
        .pipe(browserSync.reload({ stream: true }))
});


/*********** WATCHERS **********/

gulp.task('watch', function() {
    // gulp.watch('./*.html', gulp.parallel('html'));
    gulp.watch('src/scss/**/*.scss', gulp.parallel('styles-processing'));
    gulp.watch('src/js/**/*.js', gulp.parallel('scripts-processing'));
});


/*********** СБОРЩИК ТАСКОВ dev **********/

gulp.task('dev', gulp.parallel('watch', 'browser-sync'));


