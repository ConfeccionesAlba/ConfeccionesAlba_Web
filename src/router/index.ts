// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })
//
// export default router

import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {APP_ROUTE_NAMES} from "@/constants/routeNames.ts";

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
    {
      path: '/:catchAll(.*)',
      name: APP_ROUTE_NAMES.NOT_FOUND,
      component: () => import('@/components/NotFound.vue')
    }
  ],
})

export default router

