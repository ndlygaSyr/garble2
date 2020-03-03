import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(componentName){
    return () => import(`@/components/pages/${componentName}`)
}

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'Home',
            component: load('Home')
        },
        {
            path:'/about',
            name:'About',
            component: load('About')
        },
        {
            path:'/photography',
            name:'Photography',
            component: load('Photography')
        },
        {
            path:'/work',
            name:'Work',
            component: load('Work')
        },
        {
            path:'/contact',
            name:'Contact',
            component: load('Contact')
        }
    ]
})

export default router
