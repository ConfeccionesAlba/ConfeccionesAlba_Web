<script setup lang="ts">
// TODO: check a better ts way to define a prop
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card product-card">
    <img :src="product.image" class="card-img-top" :alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  margin: 1rem;
  max-width: 18rem;
}
</style>