# qiankun-demo

主要是解决微应用路由切换后主应用切换路由报错问题，代码参考主应用的路由配置
```js
router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath;
  if (!window.history.state.back) window.history.state.back = from.fullPath;
  return next();
});
```
