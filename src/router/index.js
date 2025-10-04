import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/features/auth/stores/auth.js'
import Login from '@/features/auth/Login.vue'
import Dashboard from '@/features/dashboard/Dashboard.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      if (authStore.isLoggedIn) {
        next()
      } else {
        next('/login')
      }
    }
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
