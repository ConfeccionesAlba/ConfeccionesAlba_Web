import api from '@/services/api'
import type IApiResponse from '@/types/apiResponse'
import type { ICategory, ICategoryCreate, ICategoryUpdate } from '@/types/categoriesResponse'
import { API_ENDPOINT_NAMES } from '@/constants/apiNames'

export default {
  async getCategories() {
    try {
      const response = await api.get<IApiResponse<ICategory[]>>(API_ENDPOINT_NAMES.CATEGORIES)

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.errorMessages.join('\r\n'))
      }
    } catch (err) {
      console.error('Categories fetch failed', err)
      throw err
    }
  },

  async getCategoryById(id: number) {
    try {
      const endpoint = `${API_ENDPOINT_NAMES.CATEGORIES}/${id}`
      const response = await api.get<IApiResponse<ICategory>>(endpoint)

      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.errorMessages.join('\r\n'))
      }
    } catch (err) {
      console.error('Categories fetch failed', err)
      throw err
    }
  },

  async createCategory(newCategory: ICategoryCreate) {
    try {
      const response = await api.post<IApiResponse<ICategory>>(
        API_ENDPOINT_NAMES.CATEGORIES,
        newCategory,
      )
      if (response.data.isSuccess) {
        return response.data.result
      } else {
        throw new Error(response.data.errorMessages.join('\r\n'))
      }
    } catch (err) {
      console.error('Category creation failed', err)
      throw err
    }
  },

  async updateCategoryById(id: number, categoryUpdate: ICategoryUpdate) {
    try {
      const endpoint = `${API_ENDPOINT_NAMES.CATEGORIES}/${id}`
      const response = await api.put<IApiResponse<ICategory>>(endpoint, categoryUpdate)

      if (response.data.isSuccess) {
        return
      } else {
        throw new Error(response.data.errorMessages.join('\r\n'))
      }
    } catch (err) {
      console.error('Category update failed', err)
      throw err
    }
  },
}
