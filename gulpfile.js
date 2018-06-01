const gulp          = require('gulp'),
      postcss       = require('gulp-postcss'),
      babel         = require('gulp-babel'),
      imagemin      = require('gulp-imagemin'),
      sourcemaps    = require('gulp-sourcemaps'),
      autoprefixer  = require('autoprefixer'),
      cssnano       = require('cssnano');

const src   = './src',
      dist  = './dist';

gulp.task('html', () =>
  gulp.src(`${src}/*.html`)
      .pipe(gulp.dest(dist))
);
gulp.task('css', () =>
  gulp.src(`${src}/css/*.css`)
      .pipe(sourcemaps.init())
      .pipe(postcss([autoprefixer(),cssnano()]))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest(`${dist}/css`))
);
gulp.task('js:app', () =>
  gulp.src(`${src}/app.js`)
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(gulp.dest(dist))
);
gulp.task('js', ['js:app'], () =>
  gulp.src(`${src}/components/*.js`)
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(gulp.dest(`${dist}/components`))
);
gulp.task('images', () =>
  gulp.src(`${src}/images/**/*.+(png|jpg|gif|svg)`)
      .pipe(imagemin())
      .pipe(gulp.dest(`${dist}/images`))
)
gulp.task('fonts', () =>
  gulp.src(`${src}/fonts/**/*`)
      .pipe(gulp.dest(`${dist}/fonts`))
)

gulp.task('watch', () => {
  gulp.watch(`${src}/css/*.css`, ['css']);
  gulp.watch(`${src}/*.html`, ['html']);
  gulp.watch(`${src}/components/*.js`, ['js']);
  gulp.watch(`${src}/app.js`, ['js:app']);
})

gulp.task('default', ['html', 'css', 'js', 'images', 'fonts']);
          