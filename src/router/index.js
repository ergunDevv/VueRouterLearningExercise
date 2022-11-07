// DEFINE OUR ROUTING RULES

import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import CarView from '../views/CarView'


const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component:HomeView
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
        

    ]
})
export default router
