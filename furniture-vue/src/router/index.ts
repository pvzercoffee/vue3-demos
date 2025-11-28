import About from '@/pages/About.vue'
import Board from '@/pages/Board.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import ShowProduct from '@/pages/ShowProduct.vue'

import {createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:"about",
            path:"/about",
            component:About
        },
        {
            name:"board",
            path:"/board",
            component:Board
        },
        {
            name:"home",
            path:"/home",
            component:Home
        },
        {
            name:"login",
            path:"/login",
            component:Login
        },
        {
            name:"show",
            path:"/show",
            component:ShowProduct
        },
        {
            name:"/",
            redirect:"/home",
            path:"/"
        }
    ]
});

export default router