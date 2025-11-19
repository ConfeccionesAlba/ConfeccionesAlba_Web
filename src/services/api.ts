import axios from 'axios'
import { CONFIG_API_URL } from '@/constants/config'
import { TOKEN_NAME } from '@/constants/constants'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: CONFIG_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

// Request interceptor for adding auth token and security headers
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = Cookies.get(TOKEN_NAME)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // Add security headers
    config.headers['X-Content-Type-Options'] = 'nosniff'
    config.headers['X-Frame-Options'] = 'DENY'

    return config
  },
  (error) => Promise.reject(error),
)

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized access
    if (error.response && error.response.status === 401) {
      // Clear auth data if token is invalid
      Cookies.remove(TOKEN_NAME)
    }
    return Promise.reject(error)
  },
)

export default api
