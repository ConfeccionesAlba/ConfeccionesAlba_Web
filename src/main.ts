import {createApp} from 'vue'
import {createPinia} from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import {useThemeStore} from "@/stores/themeStore.ts";

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

const themeStore = useThemeStore()
if (themeStore.theme) {
  document.body.setAttribute('data-bs-theme', themeStore.theme)
}

app.use(router)

app.mount('#app')
