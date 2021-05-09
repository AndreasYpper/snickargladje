import { createWebHistory, createRouter } from "vue-router";

import HomeView from '@/views/HomeView'
import ContactView from '@/views/ContactView'
import AboutView from '@/views/AboutView'

import ProductView from '@/views/ProductView'

const routes = [
  {
    path: '/snickargladje/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/snickargladje/kontakt',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/snickargladje/om',
    name: 'about',
    component: AboutView
  },
  {
    path: '/snickargladje/produkt',
    name: 'product',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;