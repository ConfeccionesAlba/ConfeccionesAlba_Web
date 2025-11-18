<script setup lang="ts">
import {APP_ROUTE_NAMES} from "@/constants/routeNames.js";
import {useThemeStore} from "@/stores/themeStore.js";
import {useAuthStore} from "@/stores/authStore.js";
import {computed} from "vue";

const themeStore = useThemeStore()
const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)
</script>

<template>
  <nav class="navbar navbar-expand-md rounded-3 mx-auto my-2 w-100 bg-success bg-opacity-10 text-success">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: APP_ROUTE_NAMES.HOME }">
        <img src="@/assets/sewing_machine.svg"
             alt="Logo"
             width="28px"
             class="d-inline-block align-text-top me-2">
      </router-link>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: APP_ROUTE_NAMES.HOME }" class="nav-link" aria-current="page">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: APP_ROUTE_NAMES.PRODUCTS }" class="nav-link" aria-current="page">
              Productos
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto align-items-center small">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-laptop"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" aria-current="page" @click="themeStore.setTheme('light')">
                  <i class="bi bi-sun"></i>
                  Light
                </button>
              </li>
              <li>
                <button class="dropdown-item" aria-current="page" @click="themeStore.setTheme('dark')">
                  <i class="bi bi-moon-fill"></i>
                  Dark
                </button>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link :to="{ name: APP_ROUTE_NAMES.SIGN_IN }" class="nav-link">
              <i class="bi bi-box-arrow-in-right"></i> Login
            </router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <button class="nav-link" @click="authStore.signOut()">
              <i class="bi bi-box-arrow-right"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>