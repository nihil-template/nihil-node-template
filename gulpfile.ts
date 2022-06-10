import gulp from 'gulp';
import ts from 'gulp-typescript';
import nodeSass from 'sass';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoPrefixer from 'gulp-autoprefixer';
import del from 'del';

const routes = {
  tsPath: './src/ts/*.ts',
  tsWatch: './src/ts/**/*.ts',
  jsPath: './src/js',
  sassPath: './src/scss/*.scss',
  sassWatch: './src/scss/**/*.scss',
  cssPath: './src/css',
};

const tsProject = ts.createProject('tsconfig.json');
const sassProject = sass(nodeSass);

const tsCompile = () => tsProject.src()
  .pipe(sourcemaps.init())
  .pipe(tsProject()).js
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(routes.jsPath));

const sassCompile = () => gulp.src(routes.sassPath)
  .pipe(sourcemaps.init())
  .pipe(sassProject())
  .pipe(autoPrefixer())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(routes.cssPath));

const clean = () => del([ routes.jsPath, routes.cssPath, ]);

const watch = () => {
  gulp.watch(routes.tsWatch, tsCompile);
  gulp.watch(routes.sassWatch, sassCompile);
};

export const compile = gulp.series(clean, gulp.parallel(tsCompile, sassCompile), watch);
