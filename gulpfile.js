const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');


gulp.task("nunjucks", function () {
    return gulp.src("src/pages/*.html")
    .pipe(nunjucksRender({
        path: ['src/templates'],
    }))
    .pipe(gulp.dest("dist/"));
})

gulp.task('watch', () => {
    gulp.watch('src/**/*.*', gulp.parallel('nunjucks'));
});

gulp.task('default', gulp.series('nunjucks', 'watch'));

// 'use strict';

// const gulp = require('gulp');
// const brSync = require('browser-sync').create();
// const nunjucksRender = require('gulp-nunjucks-render');

// gulp.task('brSync', () => {
//     brSync.init({
//         server: {          
//             baseDir: "./dist"
//         },
//     });
// });

// gulp.task('nunjucks', () => {
//     return gulp.src("src/pages/*.html")
//     .pipe(nunjucksRender({
//         path: ['src/templates'],
//     }))
//     .pipe(gulp.dest("dist/"))
//     .pipe(brSync.reload({ stream: true }))
// });

// gulp.task('watch', gulp.parallel('brSync', () => {
//     gulp.watch('src/**/*.*', gulp.parallel('nunjucks'));
// }));

// gulp.task('default', gulp.series('nunjucks', 'watch'));