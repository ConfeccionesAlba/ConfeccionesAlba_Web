import { defineStore } from 'pinia'
import { computed, reactive, type Reactive, ref } from 'vue'
import type { ISignInCredentials, IUser } from '@/types/auth'
import Cookies from 'js-cookie'
import { TOKEN_NAME } from '@/constants/constants'
import router from '@/router'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import authService from '@/services/authService'
import { decodeToken } from '@/utils/tokenUtils'
import { AxiosError } from 'axios'

export const useAuthStore = defineStore('authStore', () => {
  // state
  const user: Reactive<IUser> = reactive({
    id: 0,
    name: '',
    email: '',
    role: '',
  })

  const isAuthenticated = ref(false)

  // getter
  const getUserInfo = computed(() => {
    return isAuthenticated.value ? user : null
  })

  const isAdmin = computed(() => {
    return isAuthenticated.value && user.role === 'Admin'
  })

  // actions
  function initialize() {
    try {
      const token = Cookies.get(TOKEN_NAME)
      if (token) {
        const userData = decodeToken(token)
        if (userData) {
          Object.assign(user, userData)
          isAuthenticated.value = true
        } else {
          clearAuthData()
        }
      } else {
        clearAuthData()
      }
    } catch (error) {
      console.error('Error initializing auth store', error)
      clearAuthData()
    }
  }

  async function signIn(credentials: ISignInCredentials) {
    try {
      const { token, user: userData } = await authService.signIn(credentials)
      Object.assign(user, userData)
      isAuthenticated.value = true

      Cookies.set(TOKEN_NAME, token, { expires: 7, secure: true, path: '/' })

      router.push('/')
      //const { showSuccess } = useSwal()
      //showSuccess('Registeration Successful')
      //router.push({ name: APP_ROUTE_NAMES.SIGN_IN })
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return {
          success: false,
          message: error.response?.data?.errorMessages?.join('--') || 'Login Failed',
        }
      } else {
        return {
          success: false,
          message: 'Login Failed',
        }
      }
    }
  }

  function clearAuthData() {
    Object.assign(user, {
      id: 0,
      name: '',
      email: '',
      role: '',
    })
    Cookies.remove(TOKEN_NAME)
  }

  function signOut() {
    clearAuthData()
    isAuthenticated.value = false
    router.push({ name: APP_ROUTE_NAMES.HOME })
  }

  return {
    user,
    isAuthenticated,
    getUserInfo,
    isAdmin,
    signIn,
    initialize,
    signOut,
  }
})
