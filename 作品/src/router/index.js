import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/Index';

let Introduce = () => import( /* webpackChunkName: "intro" */'@/views/intr/introduce');
let IntroNav = () => import( /* webpackChunkName: "intro" */'@/components/header/intro_nav');
let Buy = () => import(/* webpackChunkName: "buy" */'@/components/buy/Buy');
let BuyNav = () => import(/* webpackChunkName: "buy" */'@/components/buy/Buy_nav');
let buyButton = () => import(/* webpackChunkName: "buy" */'@/components/buy/buyButton');
let ShopList = () => import(/* webpackChunkName: "buy" */'@/components/shopList/ShopList');
let Sort = () => import(/* webpackChunkName: "sort" */'@/views/sort/Sort');
let Search = () => import(/* webpackChunkName: "search" */'@/views/search/Search');
let SearchList = () => import(/* webpackChunkName: "search" */'@/views/searchList/SearchList');
let ShopCar = () => import(/* webpackChunkName: "car" */'@/views/car/Car');

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
        path:'/buy/:id/:index?',
        name:'Buy',
        components:{
            nav:BuyNav,
            button:buyButton,
            default:Buy
        }
    },{
        path:'/shopList/:index',
        name:'ShopList',
        component:ShopList
    },{
        path:'/sort',
        name:'Sort',
        component:Sort 
    },{
        path:'/search',
        name:'Search',
        component:Search 
    },{
        path:'/searchList/:key?',
        name:'searchList',
        component:SearchList 
    },{
        path:'/shopCar',
        name:'ShopCar',
        component:ShopCar
    },{
        //重定向保护
        path:'*',
        redirect:{name:'Index'} 
    }]
})

export default router;