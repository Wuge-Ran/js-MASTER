import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/Index';
let Introduce = () => import( /* webpackChunkName: "intro" */'@/views/intr/introduce');

Vue.use(VueRouter);

let router = new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        name:'Index',
        component:Index
    },{
        path:'/intro',
        name:'Intro',
        component:Introduce
    },{
        //重定向保护
        path:'*',
        redirect:{name:'Index'} 
    }]
})

export default router;