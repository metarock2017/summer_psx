var gulp = require('gulp');
//压缩图片模块
var imagemin = require('gulp-imagemin');
//编译less模块
var less = require('gulp-less');
//编译sass模块
var sass = require('gulp-ruby-sass');
//浏览器自动刷新
var browsersync = require('browser-sync').create();


// 压缩图片
gulp.task('images', function() {
    gulp.src('images/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/images'))
        .pipe(browsersync.stream());
});
gulp.task('auto', function() {
    gulp.watch('images/*.*)', ['images'])
});
gulp.task('default', ['images', 'auto'])

//编译less
gulp.task('less', function() {
    gulp.src('less/**.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(browsersync.stream());
});
gulp.task('auto', function() {
    gulp.watch('less/**.less', ['less'])
})
gulp.task('default', ['less', 'auto'])

//编译sass
gulp.task('sass', function() {
    gulp.task('sass', function() {
        return gulp.src('sass/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist/css'));
            .pipe(browsersync.stream());
    });
})
gulp.task('auto', function() {
    gulp.watch('sass/**/*.scss', ['sass'])
});
gulp.task('default', ['sass', 'auto'])


gulp.task('browser-sync', function() {
    var files = [
       'pages/*.html',
       'css/*.css',
       'js/*.js'
    ];
   browserSync.init({
     server: { baseDir: "./" } 
   });
});
gulp.task('watch', function () {
   gulp.watch([
        'css/*.css',
        'pages/*.html',
        'js/*.js'
   ], ['browser-sync']);
 });
gulp.task('default', ['browser-sync','watch']);。