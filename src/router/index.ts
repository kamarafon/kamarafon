import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/kamarafon',
      name: 'kamarafon-main',
      component: () => import('@/views/kamarafon/KamarafonMain.vue'),
    },
    {
      path: '/kamarafon/:level',
      name: 'kamarafon-game',
      component: () => import('@/views/kamarafon/KamarafonGame.vue'),
    },
  ]
})

export default router
