import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ICategory } from '@/types/categoriesResponse'
import categoriesService from '@/services/categoriesService'

export const useCategoriesStore = defineStore('categoriesStore', () => {
  // state
  const categories = ref<ICategory[]>([])
  const lastFetch = ref<number | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Cache configuration - categories rarely change
  const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

  // Getters
  const getCategories = computed(() => {
    return categories.value
  })

  const getCategoryById = computed(() => {
    return (id: number) => categories.value.find((cat) => cat.id === id)
  })

  // Actions
  async function fetchCategories(forceRefresh = false) {
    // Check cache first
    const now = Date.now()
    if (
      !forceRefresh &&
      categories.value.length > 0 &&
      lastFetch.value &&
      now - lastFetch.value < CACHE_DURATION
    ) {
      return categories.value
    }

    try {
      isLoading.value = true
      error.value = null

      const freshCategories = await categoriesService.getCategories()
      categories.value = freshCategories
      lastFetch.value = now

      return freshCategories
    } catch (err) {
      error.value = 'Failed to fetch categories'
      console.error('Error fetching categories:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function fetchCategoryById(id: number) {
    // Check cache first
    const cachedCategory = categories.value.find((cat) => cat.id === id)
    if (cachedCategory) {
      return cachedCategory
    }

    try {
      isLoading.value = true
      error.value = null

      const freshCategory = await categoriesService.getCategoryById(id)

      // Update our cache
      const existingIndex = categories.value.findIndex((cat) => cat.id === id)
      if (existingIndex !== -1) {
        categories.value[existingIndex] = freshCategory
      } else {
        categories.value.push(freshCategory)
      }

      return freshCategory
    } catch (err) {
      error.value = 'Failed to fetch category'
      console.error('Error fetching category:', err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  function clearCache() {
    categories.value = []
    lastFetch.value = null
  }

  return {
    categories,
    isLoading,
    error,
    getCategories,
    getCategoryById,
    fetchCategories,
    fetchCategoryById,
    clearCache,
  }
})
