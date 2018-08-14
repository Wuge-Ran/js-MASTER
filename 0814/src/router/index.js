import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '@/views/home';
import View from '@/views/View';
import Ques from '@/views/ques';
import ViewChild from '@/views/view-child/viewChild';
import ViewChild2 from '@/views/view-child/viewChild2';

Vue.use(VueRouter);

let router = new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        name:'Home',
        component:Home
    },{
        path:'/v',
        component:View,
        children:[{
            path:'view-child/:id?',
            component:ViewChild
        }]
    },{
        path:'/404',
        component:Ques
    },{
        path:'*',
        redirect(to){
            if(to.path==='/ran'){
                return {name:'Home'}
            }else{
                return {path:'/404'}
            }
        }
    }]
})

export default router;