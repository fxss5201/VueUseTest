import { createRouter, createWebHashHistory } from 'vue-router'

const Browser = () => import('./../views/Browser/index.vue')
const useClipboard = () => import('./../views/Browser/useClipboard.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/Browser'
    },
    {
      path: '/Browser',
      name: 'Browser',
      component: Browser,
      redirect: '/Browser/useClipboard',
      children: [
        {
          path: 'useClipboard',
          name: 'useClipboard',
          component: useClipboard
        }
      ]
    }
  ]
})

export default router
