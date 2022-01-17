import { createRouter, createWebHistory } from 'vue-router'
import {userRoutes} from "@/modules/users/routes";
const routes = [
    ...userRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
