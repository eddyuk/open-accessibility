const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const fileinclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');

// Process JavaScript files
function js() {
  return gulp.src('./src/**/*.babel.js')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('.babel', '');
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('./dist'));
}

// Process CSS files
function css() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist'))
    .pipe(cssmin())
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('./dist'));
}

exports.js = js;
exports.css = css;
exports.default = gulp.parallel(js, css);
