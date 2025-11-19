<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import productsService from '@/services/productsService'
import type { IProduct } from '@/types/productsResponse'
import { useCategoriesStore } from '@/stores/categoriesStore'

const route = useRoute()
const product = ref<IProduct | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)
const categoriesStore = useCategoriesStore()

// Get product ID from route
const productId = Number(route.params.id)

// Function to get category name by ID
const getCategoryName = (categoryId: number) => {
  return categoriesStore.getCategoryById(categoryId)?.name || 'Unknown Category'
}

// Fetch product details
const fetchProduct = async () => {
  if (!productId) {
    error.value = 'Invalid product ID'
    return
  }

  isLoading.value = true
  error.value = null

  try {
    // Fetch categories first to ensure we have category data
    await categoriesStore.fetchCategories()

    // Then fetch the specific product
    const data = await productsService.getProductById(productId)
    product.value = data
  } catch (err) {
    error.value = 'Failed to load product details. Please try again later.'
    console.error('Error fetching product:', err)
  } finally {
    isLoading.value = false
  }
}

// Fetch product when component is mounted
onMounted(() => {
  fetchProduct()
})
</script>

<template>
  <div class="product-detail-view">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading product details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <p class="error-message">{{ error }}</p>
      <button @click="fetchProduct" class="retry-button">Retry</button>
    </div>

    <!-- Product Not Found -->
    <div v-else-if="!product" class="empty-state">
      <p>Product not found.</p>
    </div>

    <!-- Product Details -->
    <div v-else class="product-details">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.image.url" class="product-image" :alt="product.name" />
        </div>
        <div class="col-md-6">
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-meta">
            <span class="product-category">{{ getCategoryName(product.categoryId) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail-view {
  padding: 2rem;
  min-height: 100vh;
}

.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #42b983;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  color: #d32f2f;
  margin-bottom: 1rem;
}

.retry-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background-color: #38a873;
}

.product-details {
  max-width: 1200px;
  margin: 0 auto;
}

.product-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.product-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.product-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.product-category {
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #666;
}
</style>
