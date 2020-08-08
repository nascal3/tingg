import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Dashboard2 from '@/pages/Dashboard2'
import Messages from '@/pages/Messages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard2',
    name: 'Dashboard2',
    component: Dashboard2
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
