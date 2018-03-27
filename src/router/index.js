import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/Index'
import OnemomentPage from '@/pages/career/Onemoment'
import AteamVenturePage from '@/pages/career/AteamVentures'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/portfolio',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/career/onemoment',
      name: 'OnemomentPage',
      component: OnemomentPage
    },
    {
      path: '/career/ateamventures',
      name: 'AteamVenturePage',
      component: AteamVenturePage
    }
  ]
})
