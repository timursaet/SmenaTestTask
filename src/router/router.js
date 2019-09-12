import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: function () {
        return import('../components/home.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: function () {
        return import('../components/login.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      component: function () {
        return import('../components/register.vue')
      }
    }
  ]
})
