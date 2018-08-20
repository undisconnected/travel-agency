var gulp            = require("gulp");
var imagemin        = require("gulp-imagemin");
var del             = require("del");
var usemin          = require("gulp-usemin");
var rev             = require("gulp-rev");
var cssnano         = require("gulp-cssnano");
var uglify          = require("gulp-uglify");
var browserSync     = require("browser-sync").create();


gulp.task("deleteDistFolder", ['icons'], function(){
  return del('./dist')
})

gulp.task("previewDist", function(){
  
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
  
})

gulp.task("copyGeneralFiles", function(){
  
  var pathToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!.app/assets/images/**',
    '!.app/assets/styles/**',
    '!.app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];
  
  return gulp.src(pathToCopy)
    .pipe(gulp.dest('./docs'))
  
})


gulp.task("optimizeImages", ['deleteDistFolder'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"))
})

gul.task('useminTrigger', ['deleteDistFolder'], function(){
  gulp.start('usemin');
})

gulp.task('usemin', ['deleteDistFolder','styles','scripts'], function(){
  return gulp.src('./app/index.html')
  .pipe(usemin({
    css: [function(){return rev()}, function(){return cssnano()}],
    js: [function(){return rev()}, function(){return uglify()}]
  }))
  .pipe(gulp.dest("./docs"))
})


gulp.task('build',['deleteDistFolder','copyGeneralFiles', 'optimizeImages', 'useminTrigger']);