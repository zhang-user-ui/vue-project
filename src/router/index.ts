import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/experiments02/courseSelect',
    name: 'CourseSelect',
    component: () => import('@/views/experiments02/CourseSelect.vue')
  },
  {
    path: '/homework01/indexView',
    name: 'indexView01',
    component: () => import('@/views/homework01/IndexView.vue')
  },
  {
    path: '/homework02/indexView',
    name: 'indexView02',
    component: () => import('@/views/homework02/IndexView.vue')
  },
  {
    path: '/homework03/indexView',
    name: 'indexView03',
    component: () => import('@/views/homework03/IndexView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
