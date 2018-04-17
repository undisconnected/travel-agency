var gulp          = require("gulp");
var postcss       = require("gulp-postcss");
var autoprefixer  = require("autoprefixer");
var simplevars    = require("postcss-simple-vars");
var nested        = require("postcss-nested");
var cssimport     = require("postcss-import");
var mixins        = require("postcss-mixins");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssimport, mixins, nested, simplevars, autoprefixer]))
    .on("error", function(errorMessage){
      console.log(errorMessage.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
