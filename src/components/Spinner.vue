<template>
  <div class="spinner"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
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
</style>
