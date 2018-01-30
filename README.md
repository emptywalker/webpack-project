按照[教程](https://segmentfault.com/a/1190000006178770)学习webpack过程中出现的问题总结


### 在配置webpack-dev-server后出现的问题

**描述**
执行npm run start出现如下错误，此时webpack的版本为3.10.0已经安装好了。
```
xuyouhongs-MacBook-Pro:webpack-study emptywalker$ npm run server

> lihe-webpack@1.0.0 server /Users/emptywalker/Desktop/Study/webpack-study
> webpack-dev-server --open

module.js:491
    throw err;
    ^

Error: Cannot find module 'webpack'
    at Function.Module._resolveFilename (module.js:489:15)
    at Function.Module._load (module.js:439:25)
    at Module.require (module.js:517:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/emptywalker/Desktop/Study/webpack-study/node_modules/webpack-dev-server/lib/Server.js:22:17)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! lihe-webpack@1.0.0 server: `webpack-dev-server --open`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the lihe-webpack@1.0.0 server script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/emptywalker/.npm/_logs/2018-01-30T07_50_30_802Z-debug.log

```
执行了npm install得到以下提示

```
xuyouhongs-MacBook-Pro:webpack-study emptywalker$ npm install
npm WARN webpack-dev-middleware@1.12.2 requires a peer of webpack@^1.0.0 || ^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN webpack-dev-server@2.11.1 requires a peer of webpack@^2.2.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN lihe-webpack@1.0.0 No repository field.

up to date in 2.837s
```
**解决**
按照提示，使用webpack-dev-server@2.11.1需要使用webpack的 ^2.2.0||^3.0.0， 因此去到package.json文件中，修改依赖如下：

```
"devDependencies": {
    "webpack": "^3.0.0",
    "webpack-dev-server": "^2.11.1"
  }
```
然后执行`npm run start` 成功开启本地服务

**总结**
遇到问题之后，不要慌张按照提示去搜索问题，我在`webpack-dev-server`的[issue](https://github.com/webpack/webpack-dev-server/issues/349)中,看到了在哪里添加webpack版本的依赖，只要你想去解决的问题。 基本入门级的问题都可以解决，切勿放弃！！！ 😊

在遇到
```
npm WARN webpack-dev-server@2.11.1 requires a peer of webpack@^2.2.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.
```
在package.json中添加

```
"devDependencies": {
    "webpack": "^3.0.0",
    "webpack-dev-server": "^2.11.1"
  }
```


