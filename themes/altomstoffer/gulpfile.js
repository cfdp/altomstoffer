var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    shell       = require('gulp-shell'),
    plumber     = require('gulp-plumber'),
    rename      = require('gulp-rename'),
    svgSprite   = require('gulp-svg-sprites'),
    imagemin    = require('gulp-imagemin'),
    notify      = require('gulp-notify');


/**
 * Launch the Server
 */
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    open: false,
    proxy: "altomstoffer.docker.localhost"
  });

  gulp.watch("src/scss/**", ['sass']);
  gulp.watch('src/svg/*.svg', ['svg-sprites']);
  gulp.watch("templates/**/*.html.twig").on('change', browserSync.reload);
});

/**
 * @task sass
 * Compile files from scss
 */
gulp.task('sass', function () {

  gulp.src('src/scss/styles.scss')
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({ stream:true }));

  gulp.src('src/scss/wysiwyg.scss')
  .pipe(plumber({
    errorHandler: onError
  }))
  .pipe(sass())
  .pipe(gulp.dest('css'));
});

/**
 * @task svg-sprites
 */
gulp.task('svg-sprites', function() {
  return gulp.src("src/svg/*.svg")
    .pipe(svgSprite({
      mode: "symbols",
      preview: true
    }))
    .pipe(gulp.dest("assets"))
    .pipe(imagemin({
      svgoPlugins: [
        {cleanupIDs: false},
        {removeUselessDefs: false},
        {removeTitle: true}
      ]
    }))
    .pipe( rename( {
      suffix: '.min'
    } ) )
    .pipe(gulp.dest("assets"));
});

/**
 * Default task, running just `gulp` will
 * compile Sass files, launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);

/**
 * Error Handler
 */
function onError(error) {
  notify.onError({
    title: "Gulp",
    subtitle: 'Error compiling SASS',
    message: error.message,
    sound: false
  })(error);
  this.emit('end');
}
