<script setup>
import { useAuthStore } from './stores/auth.js'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogin = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const email = formData.get('email')
  const password = formData.get('password')

  if (authStore.login(email, password)) {
    router.push('/dashboard')
  } else {
    alert('Login failed')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Login to Laundry App</h2>
        <form @submit="handleLogin">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-warning">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
