import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/aboutDogtrek',
            name: 'aboutDogtrek',
            component: () => import('../views/AboutDogtrekView.vue'),
        },
        {
            path: '/pravidla',
            name: 'pravidla',
            component: () => import('../views/PravidlaView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/kalendar',
            name: 'kalendar',
            component: () => import('../views/KalendarView.vue'),
        },
        {
            path: '/kalendar/:id',
            name: 'kalendar-podrobnosti',
            props: true,
            component: () => import('../views/PodrobnostiView.vue'),
        },
        ,
        {
            path: '/zahranicie',
            name: 'zahranicie',
            props: true,
            component: () => import('../views/ZahranicieView.vue'),
        },
    ],
});

export default router;
