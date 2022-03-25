import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)



const routes = [
    {
        path:'/',
        name:'Main',
        component:()=>import('../views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/User')
            },
            {
                path:'/mall',
                name:'mall',
                component:()=>import('../views/mall')
            }
        ]
    },
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router