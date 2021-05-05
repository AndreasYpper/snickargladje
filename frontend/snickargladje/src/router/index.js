import { createWebHistory, createRouter } from "vue-router";

import HomeView from '@/views/HomeView'
import ContactView from '@/views/ContactView'
import AboutView from '@/views/AboutView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/om',
    name: 'about',
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;