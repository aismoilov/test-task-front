import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
  export default router