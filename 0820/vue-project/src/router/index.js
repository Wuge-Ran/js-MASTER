import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/components/Index';

Vue.use(VueRouter);

let router = new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        component:Index
    }]
})

export default router;