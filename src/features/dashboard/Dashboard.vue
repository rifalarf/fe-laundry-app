<script setup>
import { useAuthStore } from '../auth/stores/auth.js'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <h1 class="text-xl font-bold">Dashboard</h1>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost" @click="handleLogout">Logout</button>
      </div>
    </div>
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h3 class="card-title">Orders</h3>
            <p>Manage laundry orders here.</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h3 class="card-title">Inventory</h3>
            <p>Track supplies and equipment.</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h3 class="card-title">Reports</h3>
            <p>View analytics and reports.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
