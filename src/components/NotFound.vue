<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <h1>404 - Página no encontrada</h1>
    <p>La página que está buscando no existe.</p>
    <router-link to="/">Ir al inicio</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
</style>
