import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),   // 滾動行為 (https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/Index')
    },
    {
      path: '/project/:name',
      name: 'Project',
      component: () => import('@/components/Project')
    },
    {
      path: '/project',
      name: 'Project List',
      component: () => import('@/components/Projects')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/About')
    },
    { path: '/projects', redirect: '/project' },
    { path: '/work/:name', redirect: '/project/:name' }, // 重新導向舊作品路由
    { path: '/404.html', redirect: '/' },
    { path: '*', redirect: '/' }, // 找不到路由時導向至首頁
  ]
})
