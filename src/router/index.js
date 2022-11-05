// DEFINE OUR ROUTING RULES

import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import CarView from '../views/CarView'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component:HomeView
        },
        {
            path:"/home",
            redirect:"/",
        },
        {
            path:"/about",
            name:"about",
            component:AboutView
        },
        {
            path:"/cars/:id",
            name:"car",
            component:CarView
        },
        {
            path:"/cars/:id",
            name:"car",
            component:CarView,
            children:[
                {
                    path:"contact",
                    component:ContactView,
                }
            ]
        },
        {
            path:"/:catchall(.*)*",
            name:"Not Found!",
            component:NotFoundView,

        }
        
        

    ]
})
export default router
