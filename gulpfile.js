var gulp = require("gulp");
var watch = require("gulp-watch");


gulp.task("default", function(){
  console.log("Hooray - We created our first Gulp task!");
})

gulp.task("html", function(){
  console.log("Imagine something cool happening to your HTML :)");
});

gulp.task("styles", function(){
  console.log("Imagine great automation with CSS Sass or PostCSS:)");
});

gulp.task("watch", function(){

  watch("./app/index.html", function(){
    gulp.start("html");
  })

  watch("./app/assets/styles/**/*.css",  function(){
    gulp.start("styles");
  })

});
