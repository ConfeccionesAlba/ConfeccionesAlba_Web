<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  image: string;
  price?: number;
  description?: string;
}

interface Props {
  product: Product
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card product-card">
    <img :src="props.product.image" class="card-img-top" :alt="props.product.name">
    <div class="card-body">
      <h5 class="card-title">{{ props.product.name }}</h5>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  margin: 1rem;
  max-width: 18rem;
}
</style>