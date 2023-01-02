import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList,
      props:(route: { query: { page: string } })=>({page:parseInt(route.query.page) || 1})
    },
    {
      path:'/events/:id',
      name:'EventLayout',
      props:true,
      component:()=>import('../views/event/Layout.vue'),
      children:[
        {
          path:'',
          name:'EventDetails',
          component:()=>import('../views/event/Details.vue')
        },
        {
          path:'register',
          name:'EventRegister',
          component:()=>import('../views/event/Register.vue')
        },
        {
          path:'edit',
          name:'EventEdit',
          component:()=>import('../views/event/Edit.vue')
        },

      ]
    },
    {
      path:'/event/:id',
      redirect: to=>({name:'EventDetails'})
    },
   {
      path: '/about-us',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
      alias:'/about'
    },
    {
      path:'/:catchAll(.*)',
      name:'NotFound',
      component:()=>import('../views/NotFound.vue')
    },
    {
      path:'/404/:resource',
      name:'404Resource',
      props:true,
      component:()=>import('../views/NotFound.vue')
    },
    {
      path:'/network-error',
      name:'NetworkError',
      component:()=>import('../views/NetworkError.vue')
    },
  ]
})

export default router
