import { createRouter, createWebHistory } from 'vue-router'

const Dashboard = () => import('@/views/Dashboard.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
  ],
})

export default router
