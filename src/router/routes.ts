import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/SampleView.vue')
      },
      {
        name: 'Page1',
        path: 'page1',
        component: () => import('@/views/Example.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/Error404.vue')
  }
]

export default routes
