import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/Index';
let Introduce = () => import( /* webpackChunkName: "intro" */'@/views/intr/introduce');
let IntroNav = () => import( /* webpackChunkName: "intro" */'@/components/header/intro_nav');
let Buy = () => import('@/components/buy/Buy');
Vue.use(VueRouter);

let router = new VueRouter({
    mode:'history',
    routes:[{
        path:'/index',
        name:'Index',
        component:Index
    },{
        path:'/intro/:id/:index?',
        name:'Intro',
        components:{
            nav:IntroNav,
            default:Introduce
        }
    },{
        path:'/buy/:id',
        name:'Buy',
        component:Buy
    },{
        //重定向保护
        path:'*',
        redirect:{name:'Index'} 
    }]
})

export default router;