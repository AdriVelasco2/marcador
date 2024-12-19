// Composables
import { createRouter, createWebHistory } from 'vue-router'
import OroTres from '@/components/OroTres.vue'
import BannerTopVue from '@/components/BannerTop.vue'
import Inicio from '@/components/Inicio.vue'
import Botones from '@/components/Botones.vue'
import BotonesVue from '@/components/BotonEspecial.vue'
import OroDos from '@/components/OroDos.vue'
import Sets3 from '@/components/SetsTres.vue'
const routes = [
  {
   
    children: [
      {
        path: '/OroTres',
        name: 'Oro tres',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: OroTres,
      },
    ],
  },
  {
    
    children: [
      {
        path: '/',
        name: 'Inicio',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Inicio,
      },
    ],
    
  },
  {
  children: [
    {
      path: '/orodos',
      name: 'Oro Dos',
      // route level code-splitting
      // this generates a separate chunk (Home-[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: OroDos,
    },
  ],
},
{
  children: [
    {
      path: '/setsTres',
      name: '3 sets',
      // route level code-splitting
      // this generates a separate chunk (Home-[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Sets3,
    },
  ],
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
