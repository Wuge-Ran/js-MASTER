import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/Index';
import store from '@/vuex'
let Introduce = () => import( /* webpackChunkName: "intro" */'@/views/intr/introduce');
let IntroNav = () => import( /* webpackChunkName: "intro" */'@/components/header/intro_nav');
let Buy = () => import(/* webpackChunkName: "buy" */'@/components/buy/Buy');
let BuyNav = () => import(/* webpackChunkName: "buy" */'@/components/buy/Buy_nav');
let buyButton = () => import(/* webpackChunkName: "buy" */'@/components/buy/buyButton');
let ShopList = () => import(/* webpackChunkName: "buy" */'@/components/shopList/ShopList');
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
        //重定向保护
        path:'*',
        redirect:{name:'Index'} 
    }]
})

router.beforeEach((to,from,next)=>{
    console.log(store.state,1)
    next( (vm)=>{
        console.log(vm)
        vm.$nextTick( ()=>{
            //防止不同选项卡height覆盖
            this.$store.state.scrollObj.refresh();
        } )
    } );
} )

export default router;