// todo:gulp-rename, remove cssnano from machine

// Imports
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpPostcss = require('gulp-postcss');
const gulpSass = require('gulp-sass');
const gulpRename = require('gulp-rename');
gulpSass.compiler = require('node-sass');

// Paths
const paths = {
  scss: {
    src: 'src/scss/**/*.+(scss|sass)',
    dest: 'dist/css/'
  }
};

// Functions
function clean() {
  return del([
    'dist/**/*'
  ])
}

function scss() {
  return gulp.src(paths.scss.src)
    .pipe(gulpSass())
    .pipe(gulpPostcss( [autoprefixer( {remove: false} )] ))
    .pipe(gulp.dest(paths.scss.dest))
    
    .pipe(gulpPostcss( [cssnano()] ))
    .pipe(gulpRename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.scss.dest));
}

function watch() {
  gulp.watch(paths.scss.src, scss);
}

// Exports
exports.clean = clean;
exports.scss = scss;
exports.watch = watch;
exports.build = gulp.series(clean, scss);
exports.default = gulp.series(clean, scss, watch);
