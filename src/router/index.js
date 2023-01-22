import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from  '@/views/HomeView.vue'
import JournalView from  '@/views/JournalView.vue'
import ContactView from  '@/views/ContactView.vue'
import ClavierView from  '@/views/ClavierView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Journal',
    name: 'Journal',
    component: JournalView
  },

  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },

  {
    path: '/Clavier',
    name: 'Clavier',
    component: ClavierView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
