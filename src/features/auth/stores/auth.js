import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const user = ref(null)

  function login(email, password) {
    // Mock login logic
    if (email === 'admin@mail.com' && password === 'admin123') {
      isLoggedIn.value = true
      user.value = { email }
      return true
    }
    return false
  }

  function logout() {
    isLoggedIn.value = false
    user.value = null
  }

  return { isLoggedIn, user, login, logout }
})
