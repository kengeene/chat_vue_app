import { createRouter, createWebHistory } from 'vue-router'
import chat from '../components/chat/index.vue'
import login from '../components/auth/Login.vue'
import auth from '../components/auth/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: chat
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth,
    children: [
      {
        path: 'login',
      name: 'login',
      component: login
    },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
