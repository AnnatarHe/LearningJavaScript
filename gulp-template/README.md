## Template

这是一个`Gulp`应用的模板文件，包含必要的`package.json`文件和`gulpfile.js`

## Include

### SASS

* gulp-sass

* gulp-autoprefixer

* gulp-minify-css

### JavaScript

* gulp-babel

* gulp-browserify2

* gulp-uglify

* 6to5ify

* gulp-concat

### Others

* gulp

* gulp-notify

* gulp-sourcemaps

* gulp-hash

## Usage

### Directory

`src`用以源文件目录

`dist`用以编译后的文件,未压缩

`production`生产环境的文件,已压缩

### Commend

常用命令:

```shell
gulp watch

gulp production
```

目前有多条命令，分别是:

```shell
* gulp [default]

* gulp sass

* gulp js

* gulp production-sass

* gulp production-js

* gulp production

* gulp watch
```
