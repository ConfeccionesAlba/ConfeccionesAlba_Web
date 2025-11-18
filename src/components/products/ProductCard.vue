<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  image: string;
  price?: number;
  description?: string;
  category?: string;
}

interface Props {
  product: Product
}

const props = defineProps<Props>();

// Format price with currency
const formattedPrice = (price?: number) => {
  if (!price) return 'Price not available';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
};
</script>

<template>
  <div class="card product-card">
    <img :src="props.product.image" class="card-img-top" :alt="props.product.name" loading="lazy">
    <div class="card-body">
      <h5 class="card-title">{{ props.product.name }}</h5>
      <p class="card-text product-description">{{ props.product.description }}</p>
      <div class="product-details">
        <span class="product-price">{{ formattedPrice(props.product.price) }}</span>
        <span v-if="props.product.category" class="product-category">{{ props.product.category }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  margin: 1rem;
  max-width: 18rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.75rem;
  min-height: 3rem;
}

.product-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.product-price {
  font-weight: 600;
  color: #42b983;
}

.product-category {
  background-color: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
}
</style>