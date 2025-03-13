import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';
import AboutPage from '@/components/pages/AboutPage.vue';
import ContactPage from '@/components/pages/ContactPage.vue';
import CustomerAPI from '@/components/pages/CustomerAPI.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/customer-api',
    name: 'Customer-API',
    component: CustomerAPI,
  },
  {
    path: '/',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;