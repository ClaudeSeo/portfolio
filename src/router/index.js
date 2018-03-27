import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/Index'
import OnemomentPage from '@/pages/career/Onemoment'
import AteamVenturePage from '@/pages/career/AteamVentures'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
