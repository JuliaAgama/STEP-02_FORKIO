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


/*********** ERRORS NOTIFYING function **********/

const onError = function (err) {
    console.log('...OOOOOOPSSSS...');
    notify.onError({
        title: 'NOTIFY message for STUPID: Error in plugin: '+ err.plugin + '. CHECK IT!!\n',
        message: err.message
    })(err);
    this.emit('end');
}


/*********** Dist Directory Clean **********/

gulp.task('clean', function () {
    return gulp.src('dist/**/*.*', {read: false})
        .pipe(clean());
});

/*********** STYLES PROCESSING **********/

gulp.task('styles', function () {
    return gulp.src('src/scss/style.scss')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['> 0.1%'],
        cascade: false
    }))
    .pipe(gulp.dest('src/scss/'))
    .pipe(cleanCss({
        level: 2
    }))
    .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({stream: true}))
});

/*********** SCRIPTS PROCESSING **********/
const jsFiles =[
    'src/js/sections/header.js',
    'src/js/sections/overview-section.js',
    'src/js/sections/testimonials-section.js',
    'src/js/sections/pricing-section.js'
];

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('src/js/'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('script-libs', function () {
    return gulp.src('src/js/libs/**/*.js')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(concat('script-libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({stream: true}))
});


/*********** Minify Images **********/

gulp.task('image-min', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'))
        .pipe(browserSync.reload({stream: true}))
});



/*********** Browser Sync **********/

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        tunnel: true
    });
});

/*********** WATCHERS **********/

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('styles'));
    gulp.watch('src/js/sections/*.js', gulp.parallel('scripts'));
    gulp.watch('src/js/libs/*.js', gulp.parallel('script-libs'));
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('src/img/**/*.+(jpg|png|jpeg|svg)', gulp.parallel('image-min'));
});


/*********** Main Tasks **********/

gulp.task('build', gulp.series('clean',
                    gulp.parallel('styles', 'scripts', 'script-libs', 'image-min')));

gulp.task('dev', gulp.parallel('browser-sync', 'watch'));


