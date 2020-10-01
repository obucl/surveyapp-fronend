import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: import('../views/Signup.vue')
  },
  {
    path: '/start',
    name: 'Survey',
    component: () => import('../views/Survey.vue')
  },
  {
    path: '/survey1',
    name: 'Survey',
    component: () => import('../views/First.vue')
  },
  {
    path: '/survey2',
    name: 'Survey',
    component: () => import('../views/Second.vue')
  },
  {
    path: '/survey3',
    name: 'Survey',
    component: () => import('../views/Third.vue')
  },
  {
    path: '/survey4',
    name: 'Survey',
    component: () => import('../views/Fourth.vue')
  },
  {
    path: '/complete',
    name: 'Survey',
    component: () => import('../views/Complete.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
