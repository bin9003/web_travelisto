import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Tutorial.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/splash',
      name: 'splash',
      component: () => import('./views/Splash.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/SignIn.vue')
    }
  ]
})
