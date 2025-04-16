const gulp = require("gulp");
const jshint = require("gulp-jshint");
const nodemon = require("gulp-nodemon");
const jsFiles = ["*.js", "src/**/*.js"];

gulp.task("style", () => {
    return gulp.src(jsFiles)
    .pipe(jshint());
});
gulp.task("inject", () => {
    const wiredep = require("wiredep").stream;
    const inject = require("gulp-inject");
    const injectSrc = gulp.src(["./public/css/*.css", "./public/js/*.js"]);
    const injectOptions = {ignorePath: "/public"};
    const options = {
        bowerJson: require ("./bower.json"),
        directory: "./bower_components",
        ignorePath: "../../bower_components"
    }
    
    return gulp.src("./src/views/*.html")
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest("./src/views"));
});

gulp.task("serve", ["style", "inject"], () => {
    const options = {
        script: "app.js",
        delayTime: 1,
        watch: jsFiles
    }
    return nodemon(options)
        .on("restart", (ev) => {
            console.log("Restarting server")
        })
});