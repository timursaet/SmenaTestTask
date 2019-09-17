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
    },
    {
      path: '/about',
      name: 'about',
      component: function () {
        return import('../components/about.vue')
      },
      meta: {
        requiresAuth: true
      }
    },
  ]
})
/*
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login'
      })
    }
  }
})
*/
