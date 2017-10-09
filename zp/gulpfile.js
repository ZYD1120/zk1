var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    webserver = require("gulp-webserver"),
    minifyCss = require("gulp-minify-css");
gulp.task("uglify", function () {
    gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
    gulp.src("css/*.css")
        .pipe(minifyCss())
        .pipe(gulp.dest("dist"));
    gulp.src('./')
        .pipe(webserver({
            port: "8090",
            livereload: true,
            directoryListing: true,
            open: true
        }));
});