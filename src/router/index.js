import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/',
    name: 'MyHeroes',
    component: function () {
      return import('../views/MyHero.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
