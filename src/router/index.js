import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {APP_ROUTE_NAMES} from "@/constants/routeNames.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: APP_ROUTE_NAMES.HOME,
            component: HomeView,
        },
        {
            path: '/about',
            name: APP_ROUTE_NAMES.ABOUT,
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: '/products',
            name: APP_ROUTE_NAMES.PRODUCTS,
            component: () => import('@/views/ProductsView.vue')
        },
    ],
})

export default router
