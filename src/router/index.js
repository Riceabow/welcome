import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import heart from "@/views/Heart.vue"
import home from "@/components/layout/Home.vue"
import about from "@/components/layout/about.vue"
import layout from "@/views/layout.vue"
const history = createWebHistory(import.meta.env.BASE_URL)
const hash = createWebHashHistory()
const router = createRouter({
  history:hash,
  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: heart,
    },
    {
      path: '/',
      redirect:'/welcome',
      component: layout,
      beforeEnter(to,from,next){
        setTimeout(()=>{
          next();
        },2200)
      },
      children:[
        {
          path: '/home',
          name:home,
          component: home,
        },
        {
          path: '/about',
          name:about,
          component:about,
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
