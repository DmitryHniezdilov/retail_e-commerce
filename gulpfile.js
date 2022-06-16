import gulp from "gulp";

// import path's
import { path } from "./gulp/config/path.js";

// import plugins
import { plugins } from "./gulp/config/plugins.js";

// global enviroment

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
};

// import tasks

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

export { svgSprive };

// watcher

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}


// tasks

const mainTasks = gulp.parallel(copy, html, scss, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

// script tasks

gulp.task('default', dev);
