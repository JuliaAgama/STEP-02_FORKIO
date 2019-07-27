;

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');



/*********** Dist Directory Clean **********/

gulp.task('clean', function () {
    return gulp.src('dist/**/*.*', {read: false})
        .pipe(clean());
});

/*********** STYLES PROCESSING **********/

gulp.task('styles', function () {
    return gulp.src('src/scss/style.scss')
        // .pipe(notify('Notify: FOUND ERROR in file: style.scss'))
        // .pipe(plumber({errorHandler: notify.onError("Plumber: FOUND ERROR in file: style.scss")}))
        // .pipe(through(function () {
        //     this.emit("error", new Error("Something happend: Plumber found ERROR"))
        // }))
        .pipe(browserSync.reload({stream: true}))
        // .pipe(sass({outputStyle: 'expanded'}).on('error', notify('Notify: FOUND ERROR in file: style.scss')))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/scss/'))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css/'))
});

/*********** SCRIPTS PROCESSING **********/

gulp.task('scripts', function () {
    return gulp.src('src/js/sections/**/*.js')
        // .pipe(notify('Notify: FOUND ERROR in SCRIPT files in forlder: src/js/sections/**/*.js'))
        // .pipe(plumber({errorHandler: notify.onError("Plumber: FOUND ERROR in SCRIPT files in forlder: src/js/sections/**/*.js")}))
        // .pipe(through(function () {
        //     this.emit("error", new Error("Something happend: Plumber found ERROR"))
        // }))
        .pipe(browserSync.reload({stream: true}))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('src/js/'))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('script-libs', function () {
    return gulp.src('src/js/libs/**/*.js')
        // .pipe(notify('Notify: FOUND ERROR in SCRIPT files in forlder: src/js/libs/**/*.js'))
        // .pipe(plumber({errorHandler: notify.onError("Plumber: FOUND ERROR in SCRIPT files in forlder: src/js/lips/**/*.js")}))
        // .pipe(through(function () {
        //     this.emit("error", new Error("Something happend: Plumber found ERROR"))
        // }))
        .pipe(browserSync.reload({stream: true}))
        .pipe(concat('script-libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});


/*********** Minify Images **********/

gulp.task('image-min', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'))
});



/*********** Browser Sync **********/

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

/*********** WATCHERS **********/

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('styles'));
    gulp.watch('src/js/**/*.js', gulp.parallel('scripts', 'script-libs'));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('src/img/**/*.+(jpg|png|jpeg)', gulp.parallel('image-min'));
});


/*********** Main Tasks **********/

gulp.task('build', gulp.series('clean', 'styles', 'scripts', 'script-libs', 'image-min'));
gulp.task('dev', gulp.parallel('watch', 'browser-sync'));


