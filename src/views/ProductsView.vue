<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import productsService from '@/services/productsService';
import {useCategoriesStore} from '@/stores/categoriesStore';
import ProductCard from '@/components/products/ProductCard.vue';
import type {IProduct} from '@/types/productsResponse';

const products = ref<IProduct[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);
const categoriesStore = useCategoriesStore();

// Fetch products from API
const fetchProducts = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    // Fetch categories first to ensure we have category data
    await categoriesStore.fetchCategories();

    // Then fetch products
    const data = await productsService.getProducts();
    products.value = data;
  } catch (err) {
    error.value = 'Failed to load products. Please try again later.';
    console.error('Error fetching products:', err);
  } finally {
    isLoading.value = false;
  }
};

// Computed property to check if there are no products
const hasProducts = computed(() => products.value.length > 0);

// Fetch products when component is mounted
onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="product-list-view">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading products...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <p class="error-message">{{ error }}</p>
      <button @click="fetchProducts" class="retry-button">Retry</button>
    </div>

    <!-- Empty State -->
    <div v-else-if="!hasProducts" class="empty-state">
      <p>No products available at the moment.</p>
    </div>

    <!-- Products Grid -->
    <div v-else class="products-grid">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product=product
      />
    </div>
  </div>
</template>

<style scoped>
.product-list-view {
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
}
</style>