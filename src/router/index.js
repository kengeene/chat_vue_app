import { createRouter, createWebHistory } from 'vue-router'
import chat from '../components/chat/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: chat
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
