const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const compile = gulpSass(require("sass"));
const cleanCSS = require("gulp-clean-css");

gulp.task("sass", async () => {
  gulp
    .src("src/copoinents/**/*.scss")
    .pipe(compile())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"));

  //moveing the scs fils To css Folder
  gulp.src("src/*.scss").pipe(compile()).pipe(gulp.dest("src/css"));
});

gulp.task("watching", () => {
  gulp.watch("src/copoinents/**/*.scss", async () => {
    gulp
      .src("src/copoinents/**/*.scss")
      .pipe(compile())
      .pipe(gulp.dest("src/css"));
  });

  gulp.watch("src/*.scss", async () => {
    gulp.src("src/*.scss").pipe(compile()).pipe(gulp.dest("src/css"));
  });
});
