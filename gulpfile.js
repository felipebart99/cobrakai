const gulp = require("gulp");

async function optimizeImages() {
  const imagemin = (await import("gulp-imagemin")).default; // Usando import dinâmico

  return gulp.src("./img/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
}

exports.default = gulp.parallel(optimizeImages);
