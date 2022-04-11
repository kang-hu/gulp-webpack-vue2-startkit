# gulp-webpack-vue2-startkit

local 開發工具包
使用 gulp管理執行任務 及用 gulp stream 透過 webpack bundle .js .vue ...

###  run script

```
$ yarn || yarn install // install packages in first time
```
```
$ gulp || gulp dev  //  build dev files & watch file change
```
```
$ gulp build // build production files
```

###  配置及相關食譜
- html : src/template的 .html 會被 copy to dist/
- less : src/styles 的 .less 會被compile to dist/styles/
  * 建議參考站上進行配置  或參考sass的 7-1 pattern
- assets : src/assets copy to dist/assets
- script :  src/scripts 下為entry point  webpack bundle to dist/scripts & watch

###  筆記
  - gulp

  ```
  "gulp-load-plugins" //Loads gulp plugins from package dependencies and attaches them to an object of your choice.
  ```