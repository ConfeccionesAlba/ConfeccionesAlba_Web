<script setup lang="ts">
import {ref, reactive, onMounted, onUnmounted} from 'vue'
import {useAuthStore} from '@/stores/authStore'
import type {ISignInCredentials} from '@/types/auth'
import {useRouter} from 'vue-router'

// Form state
const form = reactive<ISignInCredentials>({
  email: '',
  password: ''
})

// Validation state
const errors = ref<{ email?: string; password?: string }>({})
const errorMessage = ref<string | null>(null)
const isLoading = ref(false)

// Access auth store and router
const authStore = useAuthStore()
const router = useRouter()

// Form validation
const validateForm = (): boolean => {
  let isValid = true
  const newErrors: { email?: string; password?: string } = {}

  // Email validation
  if (!form.email.trim()) {
    newErrors.email = 'Email is required'
    isValid = false
  }

  // Password validation
  if (!form.password) {
    newErrors.password = 'Password is required'
    isValid = false
  }

  errors.value = newErrors
  return isValid
}

// Handle form submission
const handleSubmit = async () => {
  // Clear previous errors
  errorMessage.value = null

  // Validate form
  if (!validateForm()) {
    return
  }

  try {
    isLoading.value = true
    const result = await authStore.signIn(form)

    if (!result || !result.success) {
      errorMessage.value = result?.message || 'Login failed. Please check your credentials.'
    }
  } catch (error) {
    errorMessage.value = 'An unexpected error occurred. Please try again.'
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm">
          <div class="card-header bg-success bg-opacity-10 text-success">
            <h3 class="text-center mb-0">Login</h3>
          </div>
          <div class="card-body">
            <!-- Error message display -->
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>

            <form @submit.prevent="handleSubmit" novalidate autocomplete="off">
              <!-- Email field -->
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    id="email"
                    v-model="form.email"
                    placeholder="Enter your email"
                    required
                    autocomplete="username"
                    spellcheck="false"
                >
                <div v-if="errors.email" class="invalid-feedback">
                  {{ errors.email }}
                </div>
              </div>

              <!-- Password field -->
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errors.password }"
                    id="password"
                    v-model="form.password"
                    placeholder="Enter your password"
                    required
                    autocomplete="current-password"
                    spellcheck="false"
                >
                <div v-if="errors.password" class="invalid-feedback">
                  {{ errors.password }}
                </div>
              </div>

              <!-- Submit button -->
              <button
                  type="submit"
                  class="btn btn-success w-100"
                  :disabled="isLoading"
              >
                <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                {{ isLoading ? 'Logging in...' : 'Login' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>