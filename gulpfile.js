var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');


var errorHandler = function(err) {
    var filename = (err.fileName || 'file');
    console.log('[ \x1b[31m!ERROR\x1b[0m ] ' + (!!err.plugin ? 'Plugin ' + err.plugin : 'Main task') + ': \x1b[35m' + filename + '\x1b[0m \x1b[31m' + err.message + '\x1b[0m' + (!!err.lineNumber ? ' At line: ' + err.lineNumber : '0') );
};

var path = {
  HTML: 'src/index.html',
  SCSS: './src/scss/*.scss',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/src',
  DEST_CSS: './dist/css',
  ENTRY_POINT: './src/js/App.js'
};

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});
gulp.task('sass', function () {
  gulp.src(path.SCSS)
    .pipe(sass())
    .on('error', errorHandler)
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie 9'],
        cascade: false
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest('./app/css'));
});
gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  });
});
gulp.task('watch', function() {
  gulp.watch([path.HTML, path.SCSS], ['copy', 'sass']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTML', 'build']);

gulp.task('default', ['connect', 'watch']);