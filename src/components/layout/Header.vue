<script setup>

import {VaNavbar, VaNavbarItem} from "vuestic-ui";
</script>

<template>
  <VaNavbar>
    <template #left>
      <VaNavbarItem class="logo">
        <router-link to="/">
          <img width="32" src="@/assets/sewing_machine.svg" alt="">
        </router-link>
      </VaNavbarItem>
    </template>
    <template #center>
      <VaNavbarItem class="hidden sm:block">
        <router-link to="/">Inicio</router-link>
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        <router-link to="/products">Productos</router-link>
      </VaNavbarItem>
    </template>
  </VaNavbar>
</template>

<style scoped>

</style>