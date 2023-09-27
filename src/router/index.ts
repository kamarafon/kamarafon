import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import KamarafonMain from '@/views/kamarafon/KamarafonMain.vue'
import KamarafonGame from '@/views/kamarafon/KamarafonGame.vue'
import RouterContainer from '@/views/RouterContainer.vue'
import KamatcherMain from '@/views/kamatcher/KamatcherMain.vue'
import KamatcherPlayerChoice from '@/views/kamatcher/KamatcherPlayerChoice.vue'
import KamatcherResults from '@/views/kamatcher/KamatcherResults.vue'

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
      component: KamarafonMain,
    },
    {
      path: '/kamarafon/:level',
      name: 'kamarafon-game',
      component: KamarafonGame,
    },

    {
      path: '/kamatcher',
      name: 'kamatcher',
      component: RouterContainer,
      children: [
        {
          path: '',
          name: 'kamatcher-main',
          component: KamatcherMain,
        },
        {
          path: ':cards/:level',
          name: 'kamatcher-game',
          component: RouterContainer,
          children: [
            {
              path: 'choice/:choice?',
              name: 'kamatcher-choice',
              component: KamatcherPlayerChoice,
            },
            {
              path: 'results/:woman/:man',
              name: 'kamatcher-results',
              component: KamatcherResults,
            }
          ]
        },
      ]
    },
  ]
})

export default router
