import { createRouter, createWebHistory } from 'vue-router';
import AComp from "../views/AComp.vue";
import BComp from "../views/BComp.vue";
const routes = [
  { path: '/aa/:a?', component: AComp },
  { path: '/bb', component: BComp },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 解决微应用路由切换后主应用切换路由报错问题
router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath;
  if (!window.history.state.back) window.history.state.back = from.fullPath;
  return next();
});

export default router